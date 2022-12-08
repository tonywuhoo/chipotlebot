require('dotenv').config()

var accountSid = process.env.TWILLIO_SID;
var authToken = process.env.TWILLIO_AUTH;

const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true,
  region: 'us1',
  edge: 'ashburn',
});

client.messages
  .create({
     body: 'Testing Twillio API',
     from: '+1888-222-1111',
     to: '+16462383031'
   })
  .then(message => console.log(message)).catch(error => console.log(error));
