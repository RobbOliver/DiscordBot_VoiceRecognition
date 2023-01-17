import { joinVoiceChannel } from "@discordjs/voice";
import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stt')
        .setDescription('Start s Speech-To-Text'),
    async execute(interaction,client) {
        interaction.reply({ content: 'test' })
        const channelID = interaction.options.getChannel('1018868757977895032 ')
        const voiceConnection = joinVoiceChannel({
            channelId:"1018868757977895032",
            guildId:"779484326269681684",
            adapterCreator:interaction.guild.voiceAdapterCreator,
        });
    }
};