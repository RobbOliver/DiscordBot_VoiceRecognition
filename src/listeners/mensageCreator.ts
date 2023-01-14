import { Client } from "discord.js";

const PREFIX = "bot";

export default (client: Client, ): void => {
    client.on('messageCreate', async ctx => {
        if (!ctx.content.startsWith(PREFIX)) return;    
        else if (ctx.content.startsWith(PREFIX)) {
            ctx.channel.send(`teste resposta: ${ctx.content}`)

        }
    });
    
}