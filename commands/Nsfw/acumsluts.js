const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();
module.exports = {
  name: 'acumsluts',
  aliases: ['acumsluts', 'anime-cumsluts'],
  category: 'Nsfw 🔞 | Anime',
  description: 'sending a random porn images type of anime about cumsluts.',
  utilisation: '{prefix}acumsluts',

  /**
   * 
   * @param {import("discord.js").Client} client 
   * @param {import("discord.js").Message} message 
   * @param {Array<string>} args 
   * @returns 
   */
  async execute(client, message, args) {
    let owo = await neko.nsfw.cumsluts();

    if (message.channel.nsfw === true) {

      const feetgif = new Discord.MessageEmbed()
        .setTitle("2D Cumsluts")
        .setImage(owo.url)
        .setColor('RANDOM')
        .setURL(owo.url);
      message.channel.send(feetgif);


    } else {
      message.channel.send(":x: shotor faghat mitoni toie channel haie **nsfw** az command estefade koni :/")
    }
  }
};
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */