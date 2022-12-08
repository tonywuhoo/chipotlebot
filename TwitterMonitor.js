import dotenv from 'dotenv'
import { twitterClient, twitterBearer } from "./TwitterInfo.js"
import fs from "fs"

dotenv.config()

let URL = "https://api.twitter.com/2/users/141341662/tweets?max_results=5"

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
    })
  console.log(response)
  for (let i = 0; i < response.data.length; i++){
    let sortedTweet = response.data[i].text.replaceAll(".", "").split(" ")
    console.log(sortedTweet)
    if (sortedTweet.includes("888222")) {
      let indexofCode = sortedTweet.indexOf("888222")
      let code = sortedTweet[indexofCode - 2]
      fs.writeFileSync('codes.txt', code)
      console.log("Is a promotional tweet")
    }
    else {
      console.log("Not a promotional tweet")
    }
  }
  return response
}

setInterval(ChipotleMonitor, 2000)