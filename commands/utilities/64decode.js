const { Command } = require('yuuko');
module.exports = new Command('decode', (message, args) => {
	const txt = args.slice(0).join(' ');
	const encoded = Buffer.from(txt, 'base64').toString();
	console.log(encoded);
	message.channel.createMessage(`<@${message.author.id}>, here is your decoded message:\n${encoded}`);
});
