require('dotenv').config()
const { token_bot } = process.env;
import ready from "./listeners/ready";
import { Client, GatewayIntentBits } from 'discord.js';
import interactionCreate from './listeners/interactionCreate';


console.log('Start Bot log');

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,    
]});

ready(client);
interactionCreate(client);

client.login(token_bot);
