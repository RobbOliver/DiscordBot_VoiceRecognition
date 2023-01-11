const { Client, GatewayIntentBits } = require('discord.js');
const tokenConfig = require("./config.json");

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
    if(msg.content === 'Ping') { msg.reply('Pong') }
});

client.login(TOKEN)
.then(() => console.log(`${client.user.username} logged!`))
.catch((err) => console.log(`${err.message} error`));

