const { Command } = require('yuuko');
module.exports = new Command('choose', (message, args) => {
	const arg = args.join(' ');
	const choices = arg.split(';;');
	const clength = choices.length;
	const num = Math.floor(Math.random() * clength);
	message.channel.createMessage(`${message.author.mention}, I choose \`${choices[num]}\``);
});
