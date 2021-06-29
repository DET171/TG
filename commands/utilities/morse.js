const { Command } = require('yuuko');
module.exports = new Command('morse', (message, args) => {
	let str = args.slice(1).join(' ');
	str = ` ${str}`;
	str = str.toLowerCase().replace(/\W/, '');
	console.log(str);
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
		' ': '==',
	};

	var ref = {
		'.-':     'a',
		'-...':   'b',
		'-.-.':   'c',
		'-..':    'd',
		'.':      'e',
		'..-.':   'f',
		'--.':    'g',
		'....':   'h',
		'..':     'i',
		'.---':   'j',
		'-.-':    'k',
		'.-..':   'l',
		'--':     'm',
		'-.':     'n',
		'---':    'o',
		'.--.':   'p',
		'--.-':   'q',
		'.-.':    'r',
		'...':    's',
		'-':      't',
		'..-':    'u',
		'...-':   'v',
		'.--':    'w',
		'-..-':   'x',
		'-.--':   'y',
		'--..':   'z',
		'.----':  '1',
		'..---':  '2',
		'...--':  '3',
		'....-':  '4',
		'.....':  '5',
		'-....':  '6',
		'--...':  '7',
		'---..':  '8',
		'----.':  '9',
		'-----':  '0',
		'==': ' ',
	};
	const convertToMorse = (string) => {
		return string.toUpperCase().split('').map(el => {
			return morseCode[el] ? morseCode[el] : el;
		}).join(' ');
	};
	const convertToStr = (string) => {
		return string.toUpperCase().split(' ').map(el => {
			return ref[el] ? ref[el] : el;
		}).join('');
	};
	if(!args.length) {
		message.channel.createMessage(`<@${message.author.id}>, you missed out the following arguments! \n e.g. \`${process.env.PREFIX} <encode/decode> <string>\``);
	}
	if(args[0] == 'encode') {
		message.channel.createMessage(convertToMorse(str));
		console.log(convertToStr(convertToMorse(str)));
	}
	if(args[0] == 'decode') {
		message.channel.createMessage(convertToStr(str));
	}
});
