/* eslint-disable */

const got = require('got');

const { Command } = require('yuuko');
module.exports = new Command('npm', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);

	got(`http://registry.npmjs.com/-/v1/search?text=${args.slice(1).join(' ')}&size=20`).then((obj) => {
		const field = [];
		const embed = {
			embed: {
				title: 'NPM Search Results',
				description: '',
				color: 0x008000,
				footer: {
					text: 'From: http://registry.npmjs.com/-/v1/',
				},
			},
		};
		obj = JSON.parse(obj.body);
		obj = obj.objects;
		var x = parseInt(args[0]);
		var x = x - 1;
		context.client.createMessage(message.channel.id, embed);
	}).catch(e => {
		console.log(e);
	});
});
