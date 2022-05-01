const Discord = require('discord.js');

module.exports = {
    name: "rule6",
    description: "Rule6!",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Do not beg for mod!')
        .addField(' PLEASE DO NOT BEG FOR MOD ONCE JOINING FOR THE FIRST TIME! AND DONT CALL ME RUDE BECAUSE IT IS QUIET RUDE TO ASK FOR MOD WHILE JOINING FOR THE FIRST TIME! ')

  
        message.channel.send(infoEmbed);
    }
}