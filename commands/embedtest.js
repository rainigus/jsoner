const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onepiece')
		.setDescription('is REAL'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		const theonepiece = new EmbedBuilder()
	     .setColor(0x0099FF)
	     .setTitle('i dont wanna see a butt')
	     .setURL('https://discord.js.org/')
	     .setAuthor({ name: 'i dont wanna see it' })
	     .setDescription('i dont wanna see')
	     .addFields(
		     { name: 'THE THUG SHAKER!!!!', value: 'THE THUG SHAKER!!!!' },
	    )
	    .setImage('https://static.wikia.nocookie.net/youtube/images/b/b3/BillJensenReacts.jpg')
	    .setTimestamp()
    return interaction.reply({ embeds: [theonepiece] });

	},
};


