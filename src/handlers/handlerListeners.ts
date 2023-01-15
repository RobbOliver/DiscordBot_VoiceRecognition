const fs = require('fs');
const path = require("path");

export default (client): void => {
    const pathDirlisteners = path.join(__dirname, "../listeners");
    const listenersFolder = fs.readdirSync(pathDirlisteners).filter(file => file.endsWith('.ts'));
    
    for (const file of listenersFolder) {

        const event = require(`${pathDirlisteners}\\${file}`);

        if(event.once) client.once(event.name, (...args) => event.execute(...args, client));
        else client.on(event.name, (...args) => event.execute(...args, client));
    }    
}