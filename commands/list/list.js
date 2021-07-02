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
						inline: true,
					},
					{
						name: 'Caliber',
						value: result.cal,
						inline: true,
					},
					{
						name: 'Damage',
						value: result.dmg,
						inline: true,
					}, {
						name: 'Capacity',
						value: result.cap,
						inline: true,
					}, {
						name: 'Rate of Fire',
						value: result.rpm,
						inline: true,
					}, {
						name: 'Range (studs)',
						value: result.r,
						inline: true,
					}, {
						name: 'Damage Multiplier (Head/Torso)',
						value: result.multi,
						inline: true,
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
		message.channel.createMessage('Hmm...there was a problem executing that command! \nError: ' + err.message);
	}
});
