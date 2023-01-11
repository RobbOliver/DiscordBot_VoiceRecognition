const Discord = require("discord.js")

module.exports = {
    name: "ping",                                   // Command Name
    aliases: [],                                // Others command name

    run: async(client, message, args) => {

        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription('Olá ${message.author}, respondendo.')

        let embed2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription('Olá ${message.author}, respondendo2.')

        message.reply({ embeds: [embed] }).then(msg => {
            setTimeout( () => {
                msg.edit({ embeds: [embed2] })
            }, 3000 )
        } )
    }
}
