const Eris = require('eris');
require('dotenv').config();
const bot = new Eris(process.env.TOKEN);
const fs = require('fs');
const prefix = process.env.PREFIX;

bot.commands = new Eris.Collection();
bot.cooldowns = new Eris.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		bot.commands.set(command.name, command);
		console.log(command.name);
	}
}

bot.on('ready', () => {
	console.log('Ready as ' + bot.user.username + '#' + bot.user.discriminator);
});

bot.on('messageCreate', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();


	if(commandName === 'foo') {
		bot.createMessage(message.channel.id, 'Bar!');
	}


	const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;


	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	const { cooldowns } = bot;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Eris.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return bot.createMessage(message.channel.id, `${message.author}, please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, bot);
	}
	catch (error) {
		console.error(error);
		bot.createMessage(message.channel.id, `<@${message.author.id}>, there was an error trying to execute that command!`);
	}

});

bot.connect();
