const { Command } = require('yuuko');
module.exports = new Command('morse', (message, args) => {
	let str = args.slice(1).join(' ');
	const morseCode = {
		'A': '.-',
		'B': '-...',
		'C': '-.-.',
		'D': '-..',
		'E': '.',
		'F': '..-.',
		'G': '--.',
		'H': '....',
		'I': '..',
		'J': '.---',
		'K': '-.-',
		'L': '.-..',
		'M': '--',
		'N': '-.',
		'O': '---',
		'P': '.--.',
		'Q': '--.-',
		'R': '.-.',
		'S': '...',
		'T': '-',
		'U': '..-',
		'W': '.--',
		'X': '-..-',
		'Y': '-.--',
		'Z': '--..',
	};
	if(!args.length) {
		message.channel.createMessage(`<@${message.author.id}>, you missed out the following arguments! \n e.g. \`${process.env.PREFIX} <encode/decode> <string>\``);
	}
	if(args[0] == 'encode') {
		str = str.toLowerCase().replace(/[^a-z]/g, '');
		const convertToMorse = (string) => {
			return string.toUpperCase().split('').map(el => {
				return morseCode[el] ? morseCode[el] : el;
			}).join(' ');
		};
		message.channel.createMessage(convertToMorse(str));
	}
});
