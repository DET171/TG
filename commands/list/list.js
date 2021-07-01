const { Command } = require('yuuko');
const list = require('../../list.json');
module.exports = new Command('list', async (message, args, context) => {
	const name = args.slice(0).join(' ').toUpperCase();
	try{
		const result = list.find(t => t.name === name);
		context.client.createMessage(message.channel.id, {
			embed: {
				title: 'Statistics',
				description: 'Here are the stats.',
				color: 0x008000,
				fields: [
					{
						name: 'Name',
						value: result.name,
						inline: false,
					},
					{
						name: 'Caliber',
						value: result.cal,
						inline: false,
					},
					{
						name: 'Damage',
						value: result.dmg,
						inline: false,
					}, {
						name: 'Capacity',
						value: result.cap,
						inline: false,
					}, {
						name: 'Rate of Fire',
						value: result.rpm,
						inline: false,
					}, {
						name: 'Range (studs)',
						value: result.r,
						inline: false,
					}, {
						name: 'Damage Multiplier (Head/Torso)',
						value: result.multi,
						inline: false,
					}, {
						name: 'Description',
						value: result.desc,
						inline: false,
					}, {
						name: 'Rank Unlock',
						value: result.rank,
						inline: false,
					},
				],
			},
		});
	}
	catch(err) {
		console.error(err);
		message.channel.createMessage('Hmm...there was a problem executing that command!');
	}
});
