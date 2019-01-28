const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const cdn = require('./cdn');

config.token = process.env.APP_TOKEN ? process.env.APP_TOKEN : config.token;

const client = new CommandoClient(config.client);

client.registry
	.registerDefaultTypes()
	.registerGroups(config.groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.on('error', console.error);
if (config.debug)
	client.on('commandError', console.error);

client.login(config.token);