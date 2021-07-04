/* eslint-disable */

const got = require('got');

const { Command } = require('yuuko');
module.exports = new Command('npm', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);

	got(`http://registry.npmjs.com/-/v1/search?text=${args.join()}&size=10`).then((obj) => {
		obj = JSON.parse(obj.body);
		obj = obj.objects;
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'NPM Search Results',
				description: '',
				color: 0x008000,
				fields: [
					{
						name: obj[0].package.name,
						value: `\`v${obj[0].package.version}\`\nScope: ${obj[0].package.scope}\n${obj[0].package.description}\nDate: ${obj[0].package.date}\n[NPM](${obj[0].package.links.npm})\n[Homepage](${obj[0].package.links.homepage})\n[Repository](${obj[0].package.links.repository})\n[Bugs/Issues](${obj[0].package.links.bugs})`,
						inline: false,
					},
					{
						name: obj[1].package.name,
						value: `\`v${obj[1].package.version}\`\nScope: ${obj[1].package.scope}\n${obj[1].package.description}\nDate: ${obj[1].package.date}\n[NPM](${obj[1].package.links.npm})\n[Homepage](${obj[1].package.links.homepage})\n[Repository](${obj[1].package.links.repository})\n[Bugs/Issues](${obj[1].package.links.bugs})`,
						inline: false,
					},
          {
            name: obj[2].package.name,
            value: `\`v${obj[2].package.version}\`\nScope: ${obj[2].package.scope}\n${obj[2].package.description}\nDate: ${obj[2].package.date}\n[NPM](${obj[2].package.links.npm})\n[Homepage](${obj[2].package.links.homepage})\n[Repository](${obj[2].package.links.repository})\n[Bugs/Issues](${obj[2].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[3].package.name,
            value: `\`v${obj[3].package.version}\`\nScope: ${obj[3].package.scope}\n${obj[3].package.description}\nDate: ${obj[3].package.date}\n[NPM](${obj[3].package.links.npm})\n[Homepage](${obj[3].package.links.homepage})\n[Repository](${obj[3].package.links.repository})\n[Bugs/Issues](${obj[3].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[4].package.name,
            value: `\`v${obj[4].package.version}\`\nScope: ${obj[4].package.scope}\n${obj[4].package.description}\nDate: ${obj[4].package.date}\n[NPM](${obj[4].package.links.npm})\n[Homepage](${obj[4].package.links.homepage})\n[Repository](${obj[4].package.links.repository})\n[Bugs/Issues](${obj[4].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[5].package.name,
            value: `\`v${obj[5].package.version}\`\nScope: ${obj[5].package.scope}\n${obj[5].package.description}\nDate: ${obj[5].package.date}\n[NPM](${obj[5].package.links.npm})\n[Homepage](${obj[5].package.links.homepage})\n[Repository](${obj[5].package.links.repository})\n[Bugs/Issues](${obj[5].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[6].package.name,
            value: `\`v${obj[6].package.version}\`\nScope: ${obj[6].package.scope}\n${obj[6].package.description}\nDate: ${obj[6].package.date}\n[NPM](${obj[6].package.links.npm})\n[Homepage](${obj[6].package.links.homepage})\n[Repository](${obj[6].package.links.repository})\n[Bugs/Issues](${obj[6].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[7].package.name,
            value: `\`v${obj[7].package.version}\`\nScope: ${obj[7].package.scope}\n${obj[7].package.description}\nDate: ${obj[7].package.date}\n[NPM](${obj[7].package.links.npm})\n[Homepage](${obj[7].package.links.homepage})\n[Repository](${obj[7].package.links.repository})\n[Bugs/Issues](${obj[7].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[8].package.name,
            value: `\`v${obj[8].package.version}\`\nScope: ${obj[8].package.scope}\n${obj[8].package.description}\nDate: ${obj[8].package.date}\n[NPM](${obj[8].package.links.npm})\n[Homepage](${obj[8].package.links.homepage})\n[Repository](${obj[8].package.links.repository})\n[Bugs/Issues](${obj[8].package.links.bugs})`,
            inline: false,
          },
          {
            name: obj[9].package.name,
            value: `\`v${obj[9].package.version}\`\nScope: ${obj[9].package.scope}\n${obj[9].package.description}\nDate: ${obj[9].package.date}\n[NPM](${obj[9].package.links.npm})\n[Homepage](${obj[9].package.links.homepage})\n[Repository](${obj[9].package.links.repository})\n[Bugs/Issues](${obj[9].package.links.bugs})`,
            inline: false,
          },
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
