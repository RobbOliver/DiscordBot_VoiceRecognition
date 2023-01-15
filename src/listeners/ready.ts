module.exports =  {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`bot started with successes ${client.user.tag}`);

    }
}

