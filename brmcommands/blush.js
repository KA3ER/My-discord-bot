const Discord = require('discord.js');

module.exports = {
    name: "blush",
    description: "Blush the bot",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('You blushed me!')
        .addField('Oh, tee hee. Im blushing UwU :flushed:')

  
        message.channel.send(infoEmbed);
    }
}
