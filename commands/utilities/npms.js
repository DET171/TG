/* eslint-disable */
const got = require('got');

const { Command } = require('yuuko');
module.exports = new Command('npms', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);

	got(`https://api.npms.io/v2/search?q=${args.slice(1).join(' ')}`).then((obj) => {
		obj = JSON.parse(obj.body);
		obj = obj.results;
		var x = parseInt(args[0]);
		x = x - 1;
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'NPMS.io Search Results',
				description: '',
				color: 0x008000,
				fields: [
					{
						name: `${x + 1}) ${obj[0].package.name}`,
						value: `\`v${obj[0].package.version}\`\nScope: ${obj[0].package.scope}\n${obj[0].package.description}\nDate: ${obj[0].package.date}\n[NPM](${obj[0].package.links.npm})\n[Homepage](${obj[0].package.links.homepage})\n[Repository](${obj[0].package.links.repository})\n[Bugs/Issues](${obj[0].package.links.bugs})`,
						inline: false,
					},
					{
						name: `${x + 2}) ${obj[1].package.name}`,
						value: `\`v${obj[1].package.version}\`\nScope: ${obj[1].package.scope}\n${obj[1].package.description}\nDate: ${obj[1].package.date}\n[NPM](${obj[1].package.links.npm})\n[Homepage](${obj[1].package.links.homepage})\n[Repository](${obj[1].package.links.repository})\n[Bugs/Issues](${obj[1].package.links.bugs})`,
						inline: false,
					},
          {
            name: `${x+3}) ${obj[2].package.name}`,
            value: `\`v${obj[2].package.version}\`\nScope: ${obj[2].package.scope}\n${obj[2].package.description}\nDate: ${obj[2].package.date}\n[NPM](${obj[2].package.links.npm})\n[Homepage](${obj[2].package.links.homepage})\n[Repository](${obj[2].package.links.repository})\n[Bugs/Issues](${obj[2].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+4}) ${obj[3].package.name}`,
            value: `\`v${obj[3].package.version}\`\nScope: ${obj[3].package.scope}\n${obj[3].package.description}\nDate: ${obj[3].package.date}\n[NPM](${obj[3].package.links.npm})\n[Homepage](${obj[3].package.links.homepage})\n[Repository](${obj[3].package.links.repository})\n[Bugs/Issues](${obj[3].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+5}) ${obj[4].package.name}`,
            value: `\`v${obj[4].package.version}\`\nScope: ${obj[4].package.scope}\n${obj[4].package.description}\nAuthor: ${obj[4].package.date}\n[NPM](${obj[4].package.links.npm})\n[Homepage](${obj[4].package.links.homepage})\n[Repository](${obj[4].package.links.repository})\n[Bugs/Issues](${obj[4].package.links.bugs})`,
            inline: false,
          }
				],
				footer: {
					text: 'From: http://registry.npmjs.com/-/v1/',
				},
			},
		});
	}).catch(e => {
		console.log(e);
	});
});
