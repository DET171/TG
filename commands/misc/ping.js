module.exports = {
	name: 'ping',
	description: 'Ping!',
	args: false,
	cooldown: 10,
	execute(message, bot) {
		bot.createMessage(message.channel.id, 'Pong!');
	},
};
