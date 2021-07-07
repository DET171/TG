const { Command } = require('yuuko');
module.exports = new Command('chat', async (message) => {
	message.channel.createMessage('You can chat with me in DMs!');
});
