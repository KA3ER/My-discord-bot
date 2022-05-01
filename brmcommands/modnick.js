const { Client, Message, MessageEmbed } = require("discord.js");
const db= require("quick.db")
module.exports = {
  name: "modnick",
  aliases: ["moderate-nick"],
  category:'moderation',
  description: "Change unmentionable name to something mentionable!",
  usage: `>modnick [@User] `,
  timeout: 2000,
  userPermissions: ["MANAGE_NICKNAMES"],
  botPermissions: ["MANAGE_NICKNAMES"],

  run: async (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member)
      return message.noMentionReply("Please mention a user to moderate nickname!");
    const random = (length = 20);
    const randomText = "abcdefghijklmnopqrstuvwxyz1234567890";
    var randomNick =
      Math.floor(Math.random() * randomText.length) +
      Math.floor(Math.random() * 72323);
      member.setNickname(`Moderated Nickname ${randomNick}`);
      let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "Mod Nick")
            .addField("**Moderated User*", member.user.username)
            .addField("**Moderated By**", message.author.username)
            .addField("**Nick Changed To**", args[1])
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
    }
  }