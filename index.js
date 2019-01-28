const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const cdn = require('./cdn');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: '350401010713231363',
	invite: 'https://discord.gg/bRCvFy9',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['test', 'Commandes de test']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.on('error', console.error);
client.on('commandError', console.error);

client.login(process.env.APP_TOKEN);