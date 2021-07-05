/* eslint-disable */

const got = require('got');

const { Command } = require('yuuko');
module.exports = new Command('npm', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);

	got(`http://registry.npmjs.com/-/v1/search?text=${args.slice(1).join(' ')}&size=20`).then((obj) => {
		obj = JSON.parse(obj.body);
		obj = obj.objects;
		var x = parseInt(args[0]);
		var x = x - 1;
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'NPM Search Results',
				description: '',
				color: 0x008000,
				fields: [
					{
						name: `${x+1}) ${obj[x].package.name}`,
						value: `\`v${obj[x].package.version}\`\nScope: ${obj[x].package.scope}\n${obj[x].package.description}\nDate: ${obj[x].package.date}\n[NPM](${obj[x].package.links.npm})\n[Homepage](${obj[x].package.links.homepage})\n[Repository](${obj[x].package.links.repository})\n[Bugs/Issues](${obj[x].package.links.bugs})`,
						inline: false,
					},
					{
						name: `${x+2}) ${obj[x+1].package.name}`,
						value: `\`v${obj[x+1].package.version}\`\nScope: ${obj[x+1].package.scope}\n${obj[x+1].package.description}\nDate: ${obj[x+1].package.date}\n[NPM](${obj[x+1].package.links.npm})\n[Homepage](${obj[x+1].package.links.homepage})\n[Repository](${obj[x+1].package.links.repository})\n[Bugs/Issues](${obj[x+1].package.links.bugs})`,
						inline: false,
					},
          {
            name: `${x+3}) ${obj[x+2].package.name}`,
            value: `\`v${obj[x+2].package.version}\`\nScope: ${obj[x+2].package.scope}\n${obj[x+2].package.description}\nDate: ${obj[x+2].package.date}\n[NPM](${obj[x+2].package.links.npm})\n[Homepage](${obj[x+2].package.links.homepage})\n[Repository](${obj[x+2].package.links.repository})\n[Bugs/Issues](${obj[x+2].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+4}) ${obj[x+3].package.name}`,
            value: `\`v${obj[x+3].package.version}\`\nScope: ${obj[x+3].package.scope}\n${obj[x+3].package.description}\nDate: ${obj[x+3].package.date}\n[NPM](${obj[x+3].package.links.npm})\n[Homepage](${obj[x+3].package.links.homepage})\n[Repository](${obj[x+3].package.links.repository})\n[Bugs/Issues](${obj[x+3].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+5}) ${obj[x+4].package.name}`,
            value: `\`v${obj[x+4].package.version}\`\nScope: ${obj[x+4].package.scope}\n${obj[x+4].package.description}\nDate: ${obj[x+4].package.date}\n[NPM](${obj[x+4].package.links.npm})\n[Homepage](${obj[x+4].package.links.homepage})\n[Repository](${obj[x+4].package.links.repository})\n[Bugs/Issues](${obj[x+4].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+6}) ${obj[x+5].package.name}`,
            value: `\`v${obj[x+5].package.version}\`\nScope: ${obj[x+5].package.scope}\n${obj[x+5].package.description}\nDate: ${obj[x+5].package.date}\n[NPM](${obj[x+5].package.links.npm})\n[Homepage](${obj[x+5].package.links.homepage})\n[Repository](${obj[x+5].package.links.repository})\n[Bugs/Issues](${obj[x+5].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+7}) ${obj[x+6].package.name}`,
            value: `\`v${obj[x+6].package.version}\`\nScope: ${obj[x+6].package.scope}\n${obj[x+6].package.description}\nDate: ${obj[x+6].package.date}\n[NPM](${obj[x+6].package.links.npm})\n[Homepage](${obj[x+6].package.links.homepage})\n[Repository](${obj[x+6].package.links.repository})\n[Bugs/Issues](${obj[x+6].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+8}) ${obj[x+7].package.name}`,
            value: `\`v${obj[x+7].package.version}\`\nScope: ${obj[x+7].package.scope}\n${obj[x+7].package.description}\nDate: ${obj[x+7].package.date}\n[NPM](${obj[x+7].package.links.npm})\n[Homepage](${obj[x+7].package.links.homepage})\n[Repository](${obj[x+7].package.links.repository})\n[Bugs/Issues](${obj[x+7].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+9}) ${obj[x+8].package.name}`,
            value: `\`v${obj[x+8].package.version}\`\nScope: ${obj[x+8].package.scope}\n${obj[x+8].package.description}\nDate: ${obj[x+8].package.date}\n[NPM](${obj[x+8].package.links.npm})\n[Homepage](${obj[x+8].package.links.homepage})\n[Repository](${obj[x+8].package.links.repository})\n[Bugs/Issues](${obj[x+8].package.links.bugs})`,
            inline: false,
          },
          {
            name: `${x+10}) ${obj[x+9].package.name}`,
            value: `\`v${obj[x+9].package.version}\`\nScope: ${obj[x+9].package.scope}\n${obj[x+9].package.description}\nDate: ${obj[x+9].package.date}\n[NPM](${obj[x+9].package.links.npm})\n[Homepage](${obj[x+9].package.links.homepage})\n[Repository](${obj[x+9].package.links.repository})\n[Bugs/Issues](${obj[x+9].package.links.bugs})`,
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
