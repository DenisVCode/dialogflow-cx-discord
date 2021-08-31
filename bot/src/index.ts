import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  console.log(JSON.stringify(interaction));
});


client.on("messageCreate", (message) => {
  console.log(JSON.stringify(message));
  // TODO: Send user messages to Dialogflow
});


client.login("BOT_SECRET");
