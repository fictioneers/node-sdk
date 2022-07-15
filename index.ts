import {  AuthApi, Configuration } from "./src/generated-sources/openapi";

const configuration = new Configuration({
  apiKey: "",
  basePath: "https://api.fictioneers.co.uk",
});

const authApi = new AuthApi(configuration)

async function getAccessToken() {
  const response = await authApi.generateTokensV1AuthTokenPost({tokenDeserializer: {userId: "1"}})
  console.log(response.accessToken)
  return response
}

getAccessToken()


