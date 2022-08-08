import dotenv from 'dotenv' // eslint-disable-line import/no-extraneous-dependencies
import Fictioneers from './index'

let fictioneers: Fictioneers
beforeAll(() => {
  dotenv.config({ path: '.env.local' })

  const apiSecretKey = process.env.SECRET_KEY

  if (!apiSecretKey) {
    console.log('Missing process.env.SECRET_KEY') // eslint-disable-line no-console
    return
  }

  fictioneers = new Fictioneers({
    apiSecretKey,
  })
})

describe('getAccessToken', () => {
  let response: Awaited<ReturnType<Fictioneers['getAccessToken']>>
  beforeAll(async () => {
    response = await fictioneers.getAccessToken()
  })
  it('should return access_token correctly', async () => {
    expect(typeof (await response?.access_token)).toBe('string')
    expect(response?.access_token.length).toBeGreaterThan(100)
  })
  it('should return expires_in correctly', async () => {
    expect(typeof (await response?.expires_in)).toBe('number')
    expect(response?.expires_in).toBeGreaterThan(1000)
  })
  it('should set properties correctly', async () => {
    expect(fictioneers.accessToken).toBe(response?.access_token)
    expect(fictioneers.accessTokenExpiry).toBe(response?.expires_in)
  })
})

describe('setAccessToken', () => {
  //   it('should return correctly', async () => {
  //     const accessToken = await fictioneers.getAccessToken()
  //     expect(typeof accessToken).toBe('string')
  //     expect(accessToken?.length).toBeGreaterThan(100)
  //     const newToken = await fictioneers.setAccessToken()
  //   })
})
