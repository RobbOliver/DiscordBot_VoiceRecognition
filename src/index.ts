require('dotenv').config()
const { token_bot } = process.env;
import { Client, GatewayIntentBits } from 'discord.js';
import ready from "./listeners/ready";


console.log('Start Bot log');

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,    
]});

ready(client);

client.login(token_bot);


