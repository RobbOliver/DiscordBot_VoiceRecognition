require('dotenv').config()
const { token_bot } = process.env;
import { Collection  } from 'discord.js';
import { Cliente } from './utils/nClient'

const { addSpeechEvent } = require("discord-speech-recognition");

import handlecommands from './handlers/handlerCommands';
import handlerListeners from './handlers/handlerListeners';

console.log('Start Bot log');

const client = new Cliente()

addSpeechEvent(client, { lang: "pt-BR" });

client.commands = new Collection();
client.commandsArray = [];

handlerListeners(client);
handlecommands(client);

client.login(token_bot);


