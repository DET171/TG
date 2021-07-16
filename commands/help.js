const { Command } = require('yuuko');
require('dotenv').config();

module.exports = new Command('help', async (message, args, context) => {
	context.client.createMessage(message.channel.id, {
		embed: {
			title: 'Help Menu',
			description: 'Please refer to ',
		},
	});
});
