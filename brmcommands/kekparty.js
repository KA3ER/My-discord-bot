const Discord = require('discord.js');

module.exports = {
    name: "kekparty",
    description: "Have the bot invite the keks over.",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('THE KEKS ARE COMING!')
        .addField(' AYYYYY YOU STARTED A KEK PARTY!!!! <:KEKW:969310818757914696> <:KEKW:969310818757914696> <:KEKW:969310818757914696> ' )

  
        message.channel.send(infoEmbed);
    }
}