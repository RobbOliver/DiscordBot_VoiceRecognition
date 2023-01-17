require('dotenv').config()
import { joinVoiceChannel } from "@discordjs/voice";
import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stt')
        .setDescription('Start a Speech-To-Text'),
    async execute(interaction,client) {
        interaction.reply({ content: 'test' })
        
        const voiceConnection = joinVoiceChannel({
            channelId: "1018868757977895032",
            guildId: "779484326269681684",
            selfDeaf: false,
            adapterCreator:interaction.guild.voiceAdapterCreator,
        });

        client.on("speech", (interaction) => {
            // If bot didn't recognize speech, content will be empty
            if (!interaction.content) return;            
          
            interaction.channel.send(interaction.content);
        });
        
    }
};