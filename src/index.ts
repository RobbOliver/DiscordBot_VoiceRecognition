require('dotenv').config()
const { token_bot } = process.env;
import ready from "./listeners/ready";
import mensageCreator from "./listeners/mensageCreator";
import interactionCreate from './listeners/interactionCreate';
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';


console.log('Start Bot log');


const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
    ],});

ready(client);
mensageCreator(client);
interactionCreate(client);

client.login(token_bot);

declare module 'discord.js' {
    export interface Client {
      aliases: Collection<string, string>;
      commands: Collection<string, string>;
      slashcommands: Collection<string, string>;
      commandsCatagories: Collection<string, string[]>;
    }
  }
