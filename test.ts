import Fictioneers from "./index";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const apiSecretKey = process.env.SECRET_KEY;

async function test() {
  if (!apiSecretKey) {
    console.log("Missing process.env.SECRET_KEY");
    return;
  }

  const fictioneers = new Fictioneers({
    apiSecretKey,
  });

  const accessToken = await fictioneers.getAccessToken();
  console.log(accessToken);
}

test();
