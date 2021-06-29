const { Command } = require('yuuko');
require('dotenv').config();

module.exports = new Command('help', async (message, args, context) => {
	context.client.createMessage(message.channel.id, {
		embed: {
			title: 'Help Menu',
			description: 'Here are some commands you can use:',
			fields: [
				{
					name: 'Encode (id: `encode`)',
					value: 'Encodes a string into Base64.',
					inline: false,
				},
				{
					name: 'Decode (id: `decode`)',
					value: 'Decodes a Base64 string.',
					inline: false,
				},
			],
			footer: {
				text: `e.g. ${process.env.PREFIX} <command>`,
			},
		},
	});
});
