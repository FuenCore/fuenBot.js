const Discord = require('discord.js');
const bot = new Discord.Client();
const DisplayTime = require('./modules/DisplayTime');
const Welcome = require('./modules/Welcome');
require('dotenv').config();

const PRE = "!";

let date = new Date();
let currentTime = "It's " + date.getHours() + "h " + date.getMinutes() + "m " + date.getSeconds() + "s " + date.getMilliseconds() + "ms ";

bot.on('ready', () => {
    console.log("I'm ready sir !")
})

bot.on('message', ( message ) => {
    if( message.content[0] === PRE ) {
        message.reply('What can i do ?');
    }
})

bot.on('message', ( message ) => {
    if( message.content === PRE + "ping") {
        message.channel.send('🏓 - Pong !');
    }
})

bot.on('message', ( message ) => {
    if( DisplayTime.$timeQ( message ) ) {
        return DisplayTime.$timeA( message )
    }
})

bot.on('guildMemberAdd', ( member ) => {
   Welcome.$welcomeMsg( member );
})




bot.login(process.env.TOKEN)
