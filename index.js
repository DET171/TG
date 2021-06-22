const Eris = require("eris");
require('dotenv').config();

const client = new Eris(process.env.TOKEN);
client.on("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", async (message) => {
  if(message.content === "!ping") {
    bot.createMessage(message.channel.id, "Pong!");
  }
});
client.connect();