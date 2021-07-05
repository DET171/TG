/* eslint-disable */
const got = require('got');
const { Command } = require('yuuko');
module.exports = new Command('repo', async (message, args, context) => {
	if(!args.length) return message.channel.createMessage('You need to search something with a number! e.g. `tp repo 1 eris`');
	try{
    var x = parseInt(args[0]);
    var x = x - 1;
		var res = await got(`https://api.github.com/search/repositories?q=${args.slice(1).join(' ')}`);
		res = JSON.parse(res.body);
		const items = res.items;
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Github repository search results',
				description: 'Here are the search results:',
				color: 16763282,
				fields: [
					{
						name: `${x+1}) ${items[x].name} (${items[x].full_name})`,
						value: `${items[x].description}\nLanguage: ${items[x].language}\nOwner: [${items[x].owner.login}](${items[x].owner.url})\nBranch: ${items[x].default_branch}\nLicense: [${items[x].license.name}](${items[x].license.url})\n[Repository Link](${items[x].html_url})\n[Homepage](${items[x].homepage})`,
						inline: false,
					},
          {
            name: `${x+2}) ${items[x+1].name} (${items[x+1].full_name})`,
            value: `${items[x+1].description}\nLanguage: ${items[x+1].language}\nOwner: [${items[x+1].owner.login}](${items[x+1].owner.url})\nBranch: ${items[x+1].default_branch}\nLicense: [${items[x+1].license.name}](${items[x+1].license.url})\n[Repository Link](${items[x+1].html_url})\n[Homepage](${items[x+1].homepage})`,
            inline: false,
          },
          {
            name: `${x+3}) ${items[x+2].name} (${items[x+2].full_name})`,
            value: `${items[x+2].description}\nLanguage: ${items[x+2].language}\nOwner: [${items[x+2].owner.login}](${items[x+2].owner.url})\nBranch: ${items[x+2].default_branch}\nLicense: [${items[x+2].license.name}](${items[x+2].license.url})\n[Repository Link](${items[x+2].html_url})\n[Homepage](${items[x+2].homepage})`,
            inline: false,
          },
          {
            name: `${x+4}) ${items[x+3].name} (${items[x+3].full_name})`,
            value: `${items[x+3].description}\nLanguage: ${items[x+3].language}\nOwner: [${items[x+3].owner.login}](${items[x+3].owner.url})\nBranch: ${items[x+3].default_branch}\nLicense: [${items[x+3].license.name}](${items[x+3].license.url})\n[Repository Link](${items[x+3].html_url})\n[Homepage](${items[x+3].homepage})`,
            inline: false,
          },
				],
				footer: {
					text: 'https://api.github.com/search/',
				},
			},
		});
	}
	catch(err) {
		console.error(err);
	}
});
