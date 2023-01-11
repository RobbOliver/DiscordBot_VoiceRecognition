const { Client, GatewayIntentBits } = require('discord.js');

const tokenConfig = require("./config.json");
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],});
const TOKEN = tokenConfig.token;


client.on('ready', (c) => {                             // When BOT is Started;
    client.user.setStatus("dnd");                       // Setting Status as Do Not Disturb
    client.user.setActivity("Under Development");       // Setting Activity
});




client.login(TOKEN)
.then(() => console.log(`${client.user.username} logged!`))
.catch((err) => console.log(`${err.message} error`));

