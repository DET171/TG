/* eslint-disable */
const got = require('got');
const { Command } = require('yuuko');
module.exports = new Command('repo', async (message, args, context) => {
	if (!args.length) return message.channel.createMessage(`Hey <@${message.author.id}> you need to search something!`);
	try {
		const field = [];
		var res = await got(`https://api.github.com/search/repositories?q=${args.slice(0).join(' ')}`);
		res = JSON.parse(res.body);
		const items = res.items;
		if(items.length > 10) {
			var repeat = 10;
		}
		else {
			var repeat = items.length;
		}
		for (let i = 0; i < repeat; i++) {
			let result = {
				name: `${i+1}) ${items[i].name} (${items[i].full_name})`,
				value: `${items[i].description}\nLanguage: ${items[i].language}\nOwner: [${items[i].owner.login}](${items[i].owner.url})\nBranch: ${items[i].default_branch}\n[Repository Link](${items[i].html_url})\n[Homepage](${items[i].homepage})`,
				inline: true,
			};
			field.push(result);
		}

		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Github repository search results',
				description: '',
				color: 0x008000,
				fields: field,
				footer: {
					text: `Showing ${repeat} packages`,
				},
			},
		});
	}
	catch(err) {
		console.error(err);
	}
});
