import { channel } from "diagnostics_channel"
import {Client, GatewayIntentBits, EmbedBuilder, WebhookClient} from "discord.js"
import dotenv from 'dotenv'
import fs from "fs"
dotenv.config()


async function discordConnect() {
  let code = fs.readFileSync('codes.txt', 'utf8')
  if (code != "") {
    console.log("Sending " + code)
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ]
    })
    
    client.on('ready', () => {
      console.log("Discord Connection is Online...")
    })
    
    const webhookClient = new WebhookClient({ url: process.env.DISCORD_WEBHOOK_URL });
    
    const chipotleEmbed = new EmbedBuilder()
      .setTitle('Free Food Free Food')
      .setURL("https://chipotlebywayve.com/?c=" + code)
    
    webhookClient.send({
      content: 'CLICK FOR FREE FOOD',
      username: 'Chipotle Monitor',
      avatarURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/800px-Chipotle_Mexican_Grill_logo.svg.png',
      embeds: [chipotleEmbed],
    });
    
    client.login(process.env.DISCORD_BOT_TOKEN)

    fs.writeFileSync('codes.txt', "")
  }
  if (fs.readFileSync('codes.txt', 'utf8') === "") {
    console.log("Waiting for Code")
  }
}


export { discordConnect}