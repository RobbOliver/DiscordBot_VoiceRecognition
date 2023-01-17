require('dotenv').config()
const { token_bot } = process.env;
import { Collection  } from 'discord.js';
import { Cliente } from './utils/nClient'

import handlecommands from './handlers/handlerCommands';
import handlerListeners from './handlers/handlerListeners';

console.log('Start Bot log');

const client = new Cliente()

client.commands = new Collection();
client.commandsArray = [];

handlerListeners(client);
handlecommands(client);  

client.login(token_bot)

module.exports = client;
