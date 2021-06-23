const { Client } = require('yuuko');
const path = require('path');
require('dotenv').config();

const bot = new Client({
	token: process.env.TOKEN,
	prefix: process.env.PREFIX,
});
bot.extendContext({
	placeholder: 'This is a placeholder',
});

bot.on('ready', () => {
	console.log('Logged in as ' + bot.user.username + '#' + bot.user.discriminator);
});

bot
	.addDir(path.join(__dirname, 'commands'))
	.connect();
