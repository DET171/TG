const { Command } = require('yuuko');
require('dotenv').config();

module.exports = new Command('help', async (message, args, context) => {
	if(!args.length) {
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Help Menu',
				description: `Here are some categories (type the corresponding number to view the categories e.g. \`${process.env.PREFIX}help 1\`):`,
				fields: [
					{
						name: '1) Utilities',
						value: 'Helpful commands. Since when was I helpful?',
						inline: false,
					},
				],
			},
		});
	}
	if(args[0] == '1') {
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Help `Utilities`',
				description: 'Here are some commands you can use:',
				fields: [
					{
						name: 'Commands',
						value: '`encode64`/`decode64`/`morse`/`translate`',
						inline: false,
					},
				],
			},
		});
	}
});
