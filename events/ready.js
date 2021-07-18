const { EventListener } = require('yuuko');
const express = require('express');
module.exports = new EventListener('ready', ({ client }) => {
	console.log('Logged in as ' + client.user.username + '#' + client.user.discriminator);
	console.log(`Bot ID: ${client.user.id}`);
	var app = express();

	// set the view engine to ejs
	app.set('view engine', 'ejs');

	// use res.render to load up an ejs view file
	const guilds = client.guilds.map((guild) => `${guild}`).length;
	const shards = client.shards.map((s) => `${s}`);
	// index page
	app.get('/', function(req, res) {
		res.render('up', {
			botUser: client.user.username + '#' + client.user.discriminator,
			botID: client.user.id,
			uptime: msToTime(client.uptime),
			guilds: guilds,
			gUrl: client.gatewayURL,
			shards: shards,
		});
	});

	const port = process.env.PORT || 8080;

	app.listen(port);
	console.log(`Server is listening on port ${port}`);

});
function msToTime(duration) {
	var milliseconds = parseInt((duration % 1000) / 100),
		seconds = Math.floor((duration / 1000) % 60),
		minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	hours = (hours < 10) ? '0' + hours : hours;
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	seconds = (seconds < 10) ? '0' + seconds : seconds;

	return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}
