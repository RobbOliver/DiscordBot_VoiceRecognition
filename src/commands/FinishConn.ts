require('dotenv').config()
const { guildId, channelId } = process.env;
import { joinVoiceChannel } from "@discordjs/voice";
import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('close-connection')
        .setDescription('Close the connection!'),
    async execute(interaction, client) {

        interaction.reply({ content: 'connection closed, bye' });

        const voiceConnection = joinVoiceChannel({
            channelId: guildId as string,
            guildId: channelId as string,
            selfDeaf: false,
            adapterCreator:interaction.guild.voiceAdapterCreator,
        });

        voiceConnection.destroy();
    }
};