const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content === "what day is it?") {
    const now = new Date();
    const dayIndex = now.getDay();
    if (dayIndex === 3) {
      msg.reply("it is wednesday my dudes https://youtu.be/du-TY1GUFGk");
    }
  }
})

client.login(process.env.BOT_TOKEN)
