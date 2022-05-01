  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`>kick`', 'Kicks a member from your server with mention or ID')
        .addField('`>ban`', 'Bans a member from your server with mention or ID')
        .addField('`>clear`', 'Purges messages')
        .addField('`>Mute/Unmute`', 'Mutes or unmutes a person. || >unmute @Jeff')
        .addField('`>warn`', 'Warns a person ' )
        .addField('`>warnings`', 'Checks a user\'s warnings')
        .addField('`>deletewarns`', 'Deletes someone\'s warnings') 
        .addField('`>rule6`',`Get the bot to say the 6th rule in the server.`) 
        .addField ('`>modnick`', `Moderate a users username. Please do a MENTION and not an ID as I haven't found out on how to make it an ID.`)
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`>meme`', 'Generates a random meme')
        .addField('`>ascii`', 'Shows Ascii text')
        .addField('`>say`', 'Get the bot to say something || >say hello :)')
        .addField('`>blush`',`Get the bot to get blushed.`)
        .addField('`>kekparty`','Get the bot to have a kek party. Currently, the emojis arent working, SO i recommond not using this. ')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`>Covid`', `See stats for COVID-19 (ex: >covid canada || >canada all`)
        .addField('`>ping`', 'Get the bot\'s API ping')
        .addField('`>setprefix`', 'Changes the bot\'s prefix (currently isn\'t working)')
        .addField('`>weather`', 'Get the weather of a location || >weather New Jersey')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}