const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "Gives info about the bot",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Info About the Bot')
        .addField('Library:', '`Discord.js V12`')
        .addField('Author:', '`ErrorX#6825`')
        .addField('Bot in:', '`https://discord.gg/dht88QPdVy`')
        .addField('Date Made:', '`5/3/2021`')
        .addField('Credit:', '`All credits go to Brncay#2527 for allowing me to use his github code for this bot, I suggest joining his server and inviting his bot. Discord invite: https://discord.gg/unh4AwUCqt Please show him some love.`')

  
        message.channel.send(infoEmbed);
    }
}
