const { Command } = require('yuuko');
module.exports = new Command('encode', (message, args) => {
	const txt = args.slice(0).join(' ');
	const encoded = Buffer.from(txt).toString('base64');
	console.log(encoded);
	message.channel.createMessage(`<@${message.author.id}>, here is your encoded message:\n${encoded}`);
});
