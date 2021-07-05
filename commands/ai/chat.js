const got = require('got');
require('dotenv').config();
const env = process.env;
const { Command } = require('yuuko');
module.exports = new Command('chat', async (message, args, context) => {
	try {
		var text = args.slice(0).join(' ');
		text = text.replace(/^<@!?[0-9]{1,20}> ?/i, '');
		if (message.content.length < 2) return;
		context.client.sendChannelTyping(message.channel.id);
		var reply = await got(`http://api.brainshop.ai/get?bid=${env.bid}&key=${env.key}&uid=${env.bid}&msg=${text}
`);
		reply = JSON.parse(reply.body);
		if (reply) {
			await message.channel.createMessage(reply.cnt);
		}
	}
	catch(e) {
		console.log(e);
		message.channel.createMessage(e.message);
	}
});
