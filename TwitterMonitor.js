import dotenv from 'dotenv'
import { twitterClient, twitterBearer } from "./TwitterInfo.js"
import fs from "fs"

dotenv.config()

let URL = "https://api.twitter.com/2/tweets?ids=1599838330706923543"

console.log(
  "Chipotle Twitter Monitor v1 " +
  "Built by Tony Wu"
)

async function ChipotleMonitor() {
  const config = {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      "Authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
    },
  };
  let response = await fetch(URL, config)
    .then(response => {
      return response.json()
    }).then(data => {
      let text = data.data[0].text
      let indexofCode = text.replaceAll(".", "").split(" ").indexOf("888222")
      return text.replaceAll(".", "").split(" ")[indexofCode - 2]
    })
  console.log(response)
  fs.writeFileSync('codes.txt', response)
  return response
}

setInterval(ChipotleMonitor, 2000)