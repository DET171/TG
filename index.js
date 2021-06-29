const { Client } = require('yuuko');
const path = require('path');
require('dotenv').config();

const bot = new Client({
	token: process.env.TOKEN,
	prefix: process.env.PREFIX,
});
bot.extendContext({
	placeholder: 'This is a placeholder',
});


bot
	.addDir(path.join(__dirname, 'commands'))
	.addDir(path.join(__dirname, 'events'))
	.connect();


/*
const { Command } = require('yuuko');
module.exports = new Command('test', (message, args, context) => {

});
*/
const list = require('./list.json');
console.log(list.list[1].cal);
