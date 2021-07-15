const { Client } = require('yuuko');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const got = require('got');
var env = dotenv.config();
env = process.env;

const bot = new Client({
	token: env.TOKEN,
	prefix: env.PREFIX,
	ignoreBots: true,
});

bot.extendContext({
	placeholder: 'This is a placeholder',
});

bot.editStatus('dnd');

bot.on('error', (err) => {
	console.error(err);
});

bot.globalCommandRequirements = {
	guildOnly: true,
};

bot.on('messageCreate', async (message) => {
	if (message.guildID == undefined && message.author.id != bot.user.id) {
		try {
			const text = message.content.replace(/^<@!?[0-9]{1,20}> ?/i, '');
			bot.sendChannelTyping(message.channel.id);
			var reply = await got(`http://api.brainshop.ai/get?bid=${env.bid}&key=${env.key}&uid=${message.author.id}&msg=${text}`);
			reply = JSON.parse(reply.body);
			if (reply) {
				await message.channel.createMessage(reply.cnt);
			}
		}
		catch(e) {
			console.log(e);
			message.channel.createMessage(e.message);
		}
	}
});

bot
	.addDir(path.join(__dirname, 'commands'))
	.addDir(path.join(__dirname, 'events'))
	.connect();

/*
const { Command } = require('yuuko');
module.exports = new Command('test', (message, args, context) => {

});
*/

const app = express();
const port = process.env.PORT || 8080;

// eslint-disable-next-line
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/up.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
