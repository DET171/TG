const { Command } = require('yuuko');

module.exports = new Command('ping', async (message) => {
	message.channel.createMessage('Pog');
});
