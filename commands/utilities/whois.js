const { Command } = require('yuuko');
const moment = require('moment');

module.exports = new Command('whois', (message, args, context) => { // eslint-disable-line no-unused-vars
	if (!args[0]) {
		return message.channel.createMessage(`${message.author.mention}, apologies! Please specify a particular member!`);
	}
	var objToday = new Date(),
		weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
		dayOfWeek = weekday[objToday.getDay()],
		domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + '').charAt(0)))) return 'th'; a = parseInt((a + '').charAt(1)); return a == 1 ? 'st' : a == 2 ? 'nd' : a == 3 ? 'rd' : 'th'; }(), // eslint-disable-line max-statements-per-line
		dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
		months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
		curMonth = months[objToday.getMonth()],
		curYear = objToday.getFullYear(),
		curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? '0' + objToday.getHours() : objToday.getHours()),
		curMinute = objToday.getMinutes() < 10 ? '0' + objToday.getMinutes() : objToday.getMinutes(),
		curSeconds = objToday.getSeconds() < 10 ? '0' + objToday.getSeconds() : objToday.getSeconds(),
		curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';
	var today = curHour + ':' + curMinute + ':' + curSeconds + curMeridiem + ' ' + dayOfWeek + ' ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear;
	const user = message.mentions[0];
	const guild = message.channel.guild;
	const member = guild.members.get(user.id);
	message.channel.createMessage({
		embed: {
			title: `User information for ${user.username}#${user.discriminator}`,
			thumbnail: {
				url: user.avatarURL,
			},
			color: 0x008000,
			fields: [
				{
					name: 'Account created at:',
					value: `${moment.utc(user.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
					inline: false,
				},
				{
					name: 'User ID:',
					value: `\`${user.id}\``,
					inline: false,
				},
				{
					name: 'Roles:',
					value: '<@&' + member.roles.map((r) => `${r}`).join('>, <@&') + '>',
					inline: false,
				},
				{
					name: 'Joined server at:',
					value: `${moment.utc(member.joinedAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
					inline: false,
				},
			],
			footer: {
				text: today,
			},
		},
	});
});