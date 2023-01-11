const { Client, GatewayIntentBits } = require('discord.js');
const tokenConfig = require("/Users/Robson/Documents/My Projects/DiscordBot_VoiceRecognition/config.json");

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],});


const TOKEN = tokenConfig.token;


client.on('ready', (c) => {
    console.log(`${client.user.username} ready!`)
});

client.on('messageCreate', (msg) => {
    console.log(msg)
});

client.login(TOKEN)
.then(() => console.log(`${client.user.username} logged!`))
.catch((err) => console.log(`${err.message} error`));

