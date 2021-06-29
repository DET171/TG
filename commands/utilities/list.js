const { Command } = require('yuuko');
const list = require('./list.json');
module.exports = new Command('list', async (message) => {

	console.log(list);
	message.channel.createMessage(list);

});
