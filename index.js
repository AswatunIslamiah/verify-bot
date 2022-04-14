const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
  disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
  if (button.id == 'AddVerifiedRole') {
    button.reply.send(`You have been verified!`, true)
    const role = button.guild.roles.cache.get(config.roleid)
    const member = button.clicker.member
    await member.roles.add(role)
  } { }
})

client.on('ready', () => {
  console.log('The bot is online!')
})

client.on('message', async (message) => {
  if (message.content.startsWith('.verify')) {
    const embed = new MessageEmbed()
      .setTitle('Missing Face Discord Server Verification')
      .setColor("GREEN")
      .setDescription('*Verify here to access specific channels*')
      .addField('Please verify that you are not a robot by clicking the button below.', 'This will give you generally access to the **Missing Face** Discord server. It may take some time to work because there are many people clicking at the same time. Please be patient as you will be granted access if you clicked on it.')
      .setFooter('Note: Our mods and admin will NEVER reach out to you first in DMs. Anyone claiming to be one of us is attempting to scam you')
      .setThumbnail('https://images-ext-2.discordapp.net/external/w5zOd-IhisnhpULGsN2G5HhlqO78RmQ5is_Sg7m7fcE/https/probot.media/jHQYWRQW98.png?width=498&height=498')


    const add = new MessageButton()
      .setStyle("green")
      .setLabel("Verify Me!")
      .setID("AddVerifiedRole")

    const row = new MessageActionRow()
      .addComponent([add])


    message.channel.send({ component: row, embed: embed })
  }
})
keepAlive();
client.login(process.env.TOKEN);
