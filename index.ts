import axios, { AxiosError } from "axios";
import {
  AuthApi,
  Configuration,
  ErrorSerializer,
  HTTPValidationError,
  ModelError,
} from "./src/generated-sources/openapi";

const handleError = (err: unknown) => {
  if (!axios.isAxiosError(err)) {
    console.log(err);
    return;
  }
  const axiosError = err as AxiosError<
    ErrorSerializer | HTTPValidationError | ModelError
  >;

  if (axiosError.response?.data && "content" in axiosError.response?.data) {
    axiosError.response?.data.content?.map((e) => e).join("\n");
  }
  if (axiosError.response?.data) {
    console.log(axiosError.response?.data);
  }
  if (axiosError.response?.data.detail) {
    const { detail } = axiosError.response?.data;
    console.log(detail);
    if (typeof detail === "string") {
      console.log(detail);
    }
    if (typeof detail !== "string" && detail.length) {
      detail.forEach((c) => {
        console.log(`Location: ${JSON.stringify(c.loc)}`);
        console.log(`Type: ${c.type}`);
        console.log(`Msg: ${c.msg}`);
      });
    }
  }
};

const configuration = new Configuration({
  apiKey: "",
  basePath: "https://api.fictioneers.co.uk",
});

const authApi = new AuthApi(configuration);

async function getAccessToken() {
  let response;
  try {
    response = await authApi.generateTokensV1AuthTokenPost({
      user_id: "1",
    });
  } catch (err: unknown) {
    handleError(err);
    return;
  }
  console.log(response.data.access_token);
  return response;
}

getAccessToken();
