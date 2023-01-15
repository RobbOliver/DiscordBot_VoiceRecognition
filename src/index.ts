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

client.login(token_bot).then(() => {
  handlerListeners(client);
  handlecommands(client);  
});

module.exports = client;
