// *** LOAD REQ
const fs = require("fs");
const { entersState, joinVoiceChannel, VoiceConnectionStatus, EndBehaviorType } = require('@discordjs/voice');
const { Client, GatewayIntentBits, getVoiceConnection, Collection } = require('discord.js');

// *** SETTING TOKEN AND CLIENT INSTANCE
const jsonConfig = require("./config.json");
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
],});

/* Collection to store voice state */
client.voiceManager = new Collection()

// *** VAR
const TOKEN = jsonConfig.token;                            // You have to EDIT
const PREFIX = jsonConfig.prefix;                          // You have to EDIT


client.on('ready', () => {                             // When BOT is Started;
    client.user.setStatus("dnd");                       // Setting Status as Do Not Disturb
    client.user.setActivity("Under Development");       // Setting Activity
});

client.on('messageCreate', async ctx => {
    if (!ctx.content.startsWith(PREFIX)) return;

    else if (ctx.content.startsWith(PREFIX)) {
        if (ctx.member.voice.channel){
            const voiceChannel = await ctx.member.voice.channel;         // Get the voice channel

            let connection = client.voiceManager.get(ctx.channel.guild.id);

            // console.log(ctx.member.voice.channel);  
            // ctx.channel.send('0');  
            ctx.channel.send(ctx.channel.guild.id);  
            console.log(client.voiceManager);  

            if (!connection) return ctx.channel.send("I can't connect on Voice Channel");            
            
            // connection = joinVoiceChannel({
            //     channelId: voiceChannel.id,
            //     guildId: voiceChannel.guild.id,
            //     selfDeaf: false,
            //     selfMute: true,
            //     adapterCreator: voiceChannel.guild.voiceAdapterCreator,

            // });

            // client.voiceManager.set(ctx.channel.guild.id, connection);
            // await entersState(connection, VoiceConnectionStatus.Ready, 20e3);
            // const receiver = connection.receiver;

            // receiver.speaking.on('start', (userId) => {
            //     if (userId == ctx.author.id) {
            //         ctx.channel.send("fon");
            //     }

                
            // });

        }
        else
            ctx.reply("I can't find you in a voice channel");
    }
});


client.login(TOKEN)
.then(() => console.log(`${client.user.username} logged!`))
.catch((err) => console.log(`${err.message} error`));

