const { Command } = require('yuuko');
const { today } = require('../../utils.js');
const moment = require('moment');
module.exports = new Command(['guild', 'server'], (message) => {
	const guild = message.channel.guild;
	message.channel.createMessage({
		embed: {
			title: 'Guild Information',
			color: 11272041,
			thumbnail: {
				url: guild.iconURL,
			},
			fields: [
				{
					name: 'Created at:',
					value: `${moment.utc(guild.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
					inline: false,
				},
			],
			footer: {
				text: today,
			},
		},
	});
});
