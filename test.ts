import dotenv from 'dotenv'
import Fictioneers from './src/index'

dotenv.config({ path: '.env.local' })

const apiSecretKey = process.env.SECRET_KEY

async function test() {
  if (!apiSecretKey) {
    console.log('Missing process.env.SECRET_KEY')
    return
  }

  const fictioneers = new Fictioneers({
    apiSecretKey,
  })

  const accessToken = await fictioneers.getAccessToken()
  console.log(accessToken)
}

test()
