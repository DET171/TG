const { Command } = require('yuuko');
require('dotenv').config();

module.exports = new Command('scripts', async (message, args, context) => {
	if(!args.length) {
		return context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Script Menu',
				description: 'Here are the options you can select. \n Type in the corresponding number to get the script.',
				fields: [
					{
						name: '1) Unnamed ESP',
						value: 'ESP Script for anything',
						inline: false,
					},
				],
				footer: {
					text: `e.g. ${process.env.PREFIX} <script name>`,
				},
			},
		});
	}
	if(args[0] === '1') {
		context.client.createMessage(message.channel.id, '```loadstring(game:HttpGet("https://raw.githubusercontent.com/ic3w0lf22/Unnamed-ESP/master/UnnamedESP.lua"))()```');
	}
	if(args[0] === 'mon') {
		// hehehehe
	}
});
