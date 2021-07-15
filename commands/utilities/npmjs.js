/* eslint-disable */

const got = require('got');

const { Command } = require('yuuko');
module.exports = new Command('npm', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);
	try {
		var obj = await got(`http://registry.npmjs.com/-/v1/search?text=${args.slice(0).join(' ')}&size=16`);
		const field = [];
		obj = JSON.parse(obj.body);
		obj = obj.objects;
		for (let i = 0; i < obj.length; i++) {
			let result = {
				name: `${i+1}) ${obj[i].package.name}`,
				value: `\`v${obj[i].package.version}\`\nScope: ${obj[i].package.scope}\n${obj[i].package.description}\nDate: ${obj[i].package.date}\n[NPM](${obj[i].package.links.npm})\n[Homepage](${obj[i].package.links.homepage})\n[Repository](${obj[i].package.links.repository})\n[Bugs/Issues](${obj[i].package.links.bugs})`,
				inline: true,
			};
			field.push(result);
		}

		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'NPM Search Results',
				description: '',
				color: 0x008000,
				fields: field,
				footer: {
					text: `Showing ${obj.length} packages`,
				},
			},
		});
	}
	catch(err) {
		console.error(err);
	}
});
