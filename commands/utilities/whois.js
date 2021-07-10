const { Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command('whois', (message, args, context) => {
    const user = message.mentions[0];
    const guild = message.guildID;
    const member = guild.members.get(message.author.id);
    console.log(member);
    console.log(user);
		if (!args[0]) {
			return message.reply('Apologies! Please specify a particular member!');
		}
    /*
		embed.setTitle('User Information');
		embed.addField('Username', user.user.username);
		embed.addField('User ID', user.id);
		embed.addField('User Tag', user.user.tag);
		embed.addField('Roles:', user.roles.cache.map((r) => `${r}`).join(' | '));
		embed.addField(
			'Created at:',
			`${moment.utc(user.user.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
		);
		embed.addField(
			'Joined server at:',
			`${moment.utc(user.joinedAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
		);
		embed.setColor(0x00ff93);
		embed.setThumbnail(user.user.avatarURL());
    */
		message.channel.createMessage({
            embed: {
                title: `User information for ${user.username}#${user.discriminator}`,
                thumbnail: {
                  url: user.avatarURL,
                },
                color: 0x008000,
                fields: [
                    {
                        name: "Created At:",
                        value: `${moment.utc(user.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                        inline: false
                    },
                    {
                        name: "User ID:",
                        value: `\`${user.id}\``,
                        inline: false
                    },
                    {
                        name: "Roles:",
                        value: user.roles.cache.map((r) => `${r}`).join(' | '),
                        inline: false
                    },
                ],
                footer: {
                  text: `${moment.utc(Date.now).format('MMMM, Do YYYY, h:mm:ss a')}`
                }
            }
        });
});