const { EventListener } = require('yuuko');
module.exports = new EventListener('ready', (context) => {
	console.log('Logged in as ' + context.client.user.username + '#' + context.client.user.discriminator);
	console.log(`Bot ID: ${context.client.user.id}`);
});
