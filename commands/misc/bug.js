const { Command } = require('yuuko');

module.exports = new Command('bug', async (message, args, context) => {
	const bug = args.slice(0).join(' ');
	context.client.createMessage('856472254564663316', `<@${message.author.id}> reported the following bug:\n${bug}`);
});
