const { EventListener } = require('yuuko');
const express = require('express');
module.exports = new EventListener('ready', (context) => {
	console.log('Logged in as ' + context.client.user.username + '#' + context.client.user.discriminator);
	console.log(`Bot ID: ${context.client.user.id}`);
	var app = express();

	// set the view engine to ejs
	app.set('view engine', 'ejs');

	// use res.render to load up an ejs view file

	// index page
	app.get('/', function(req, res) {
		res.render('up', {
			botUser: context.client.user.username + '#' + context.client.user.discriminator,
			botID: context.client.user.id,
		});
	});

	const port = process.env.PORT || 8080;

	app.listen(port);
	console.log(`Server is listening on port ${port}`);

});
