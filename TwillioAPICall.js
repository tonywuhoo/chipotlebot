import dotenv from 'dotenv'
import client from "twilio"
import fs from "fs"
dotenv.config()

async function sendtoNumb() {
  var accountSid = process.env.TWILLIO_SID
  var authToken = process.env.TWILLIO_AUTH
  const Client = new client(accountSid, authToken)
  Client.messages
    .create({
     body: fs.readFileSync('codes.txt', 'utf8'),
     from: process.env.TWILLIO_NUMBER,
     to: process.env.PHONE_NUMBER
   })
  .then(message => console.log(message)).catch(error => console.log(error));
}

export { sendtoNumb }
