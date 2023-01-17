import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    async execute(interaction, client) {
        // interaction.reply({ content: 'Pong' })
        interaction.channel.send('poooong')
    }
};