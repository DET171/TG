const { Command } = require('yuuko');

module.exports = new Command('ping', message => {
	message.channel.createMessage('Pog');
});
