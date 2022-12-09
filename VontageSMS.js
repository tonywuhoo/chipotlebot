import Nexmo from 'nexmo'

const nexmo = new Nexmo({
  apiKey: "856b9568",
  apiSecret:"fNKPyiqV9qIXN4Bq"
})

const from = "12137587662"
const to = "12016145059"
const text = "TESTING"

nexmo.message.sendSms(from, to, text, (error, result) => {
  if (error) {
    console.error(error)
  }
  else {
    console.log(result)
  }
})