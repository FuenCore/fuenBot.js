const Discord = require('discord.js');
const bot = new Discord.Client();
bot.music = require('discord.js-musicbot-addon');
require('dotenv').config()

module.exports = class musicPlayer {

    static $musicQ() {
        bot.music.start(bot, {
            youtubeKey: process.env.YT_TOKEN,
            botPrefix: "$"
        })
    }

}