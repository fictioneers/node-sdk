import axios, { AxiosError } from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {
  AuthApi,
  Configuration,
  GeneralError,
  HTTPValidationError,
  ModelError,
  TokenResponse,
} from './generated-sources/openapi'

export interface Props {
  apiSecretKey: string
  userId?: string
  basePath?: string
}

export default class Fictioneers {
  readonly userId: string

  accessToken: null | string

  accessTokenExpiry: null | number

  authApi: AuthApi

  constructor({
    apiSecretKey,
    userId,
    basePath = 'https://api.fictioneers.co.uk',
  }: Props) {
    if (typeof window !== 'undefined') {
      throw new Error(
        'This API is for server-side usage only. Your apiSecretKey should never be visible client-side.'
      )
    }

    const configuration = new Configuration({
      apiKey: apiSecretKey,
      basePath,
    })

    this.userId = userId || uuidv4()
    this.accessToken = null
    this.accessTokenExpiry = null
    this.authApi = new AuthApi(configuration)
  }

  /**
   * Generate and save a new ID Token which can be used to authenticate against the Audience APIs.
   */
  async getAccessToken(): Promise<TokenResponse | undefined> {
    let response
    try {
      response = await this.authApi.generateTokensV1AuthTokenPost({
        user_id: this.userId,
      })
    } catch (err: unknown) {
      Fictioneers.handleError(err)
      return undefined
    }
    this.accessToken = response.data.access_token
    this.accessTokenExpiry = response.data.expires_in
    return response.data
  }

  static handleError(err: unknown) {
    if (!axios.isAxiosError(err)) {
      console.log(err)
      return
    }
    const axiosError = err as AxiosError<
      GeneralError | HTTPValidationError | ModelError
    >

    if (axiosError.response?.data && 'content' in axiosError.response.data) {
      axiosError.response?.data.content?.map((e) => e).join('\n')
    }
    if (axiosError.response?.data) {
      console.log(axiosError.response?.data)
    }
    if (axiosError.response?.data.detail) {
      const { detail } = axiosError.response.data
      console.log(detail)
      if (typeof detail === 'string') {
        console.log(detail)
      }
      if (typeof detail !== 'string' && detail.length) {
        detail.forEach((c) => {
          console.log(`Location: ${JSON.stringify(c.loc)}`)
          console.log(`Type: ${c.type}`)
          console.log(`Msg: ${c.msg}`)
        })
      }
    }
  }
}
