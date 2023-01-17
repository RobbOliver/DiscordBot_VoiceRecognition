import { Client, GatewayIntentBits, Partials } from 'discord.js'


export class Cliente extends Client{
    commands: any
    commandsArray: string[] = [];
    
    constructor() {
        super({
            allowedMentions: {
                parse: ['users', 'roles', 'everyone'],
                repliedUser: false,
            },
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildInvites,
            ],
            partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.User, Partials.Reaction]
        });         
    }
}
