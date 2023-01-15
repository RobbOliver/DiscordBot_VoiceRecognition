require('dotenv').config()
const { token_bot } = process.env;
import ready from "./listeners/ready";
import mensageCreator from "./listeners/mensageCreator";
import interactionCreate from './listeners/interactionCreate';
import { Client, GatewayIntentBits, Partials } from 'discord.js';


console.log('Start Bot log');


const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
    ], partials: [Partials.Channel, Partials.Message, Partials.GuildMember, Partials.User]});

ready(client);
mensageCreator(client);
interactionCreate(client);

client.login(token_bot);
