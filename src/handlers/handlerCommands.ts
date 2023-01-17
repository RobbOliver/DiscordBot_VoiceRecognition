require('dotenv').config()
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');
const path = require("path");

export default async (client) => {
    const pathDirCommands = path.join(__dirname, "../commands");
    const commandsFolder = fs.readdirSync(pathDirCommands).filter(file => file.endsWith('.ts'));
    
    for (const file of commandsFolder) {
        const { commands, commandsArray } = client;
        
        const command = require(`${pathDirCommands}\\${file}`);
        commands.set(command.data.name, command);
        const optComand = {name:command.data.name, description:command.data.description}    
        commandsArray.push(optComand);
        
        console.log(commandsArray)
        console.log(`\n\n`)
        
        const rest = new REST({ version: '10' }).setToken(process.env.token_bot);

        
        try {            
            console.log('try')
            await rest.put(
                Routes.applicationGuildCommands(
                    process.env.client_id_bot,
                    process.env.guild_id_hini
                    ), 
            { body: commandsArray });
            console.log('Commands Registred!');
        } catch (error) {
            console.error(error);
            console.log(error);
        }

    }    
}