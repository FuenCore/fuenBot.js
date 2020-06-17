const Discord = require('discord.js');
const bot = new Discord.Client();
const DisplayTime = require('./modules/DisplayTime');
const Pong = require('./modules/Pong');
const Welcome = require('./modules/Welcome');
require('dotenv').config();

const PRE = "$";

let date = new Date();
let currentTime = "It's " + date.getHours() + "h " + date.getMinutes() + "m " + date.getSeconds() + "s " + date.getMilliseconds() + "ms ";

bot.on('ready', () => {
    console.log("I'm ready sir !")
})

// !

bot.on('message', ( message ) => {
    if( message.content[0] === PRE ) {
        message.reply('What can i do ?');
    }
})

// !ping

bot.on('message', ( message ) => {
    if( Pong.$PongQ( message ) ) {
        Pong.$PongA( message );
    }
})

// Time commands

bot.on('message', ( message ) => {

    // !time

    if( DisplayTime.$timeQ( message ) ) {
        return DisplayTime.$timeA( message )
    }

    // !date

    if( DisplayTime.$dateQ( message ) ) {
        return DisplayTime.$dateA( message )
    }
})

// Say Welcome to new member

bot.on('guildMemberAdd', ( member ) => {
   Welcome.$welcomeMsg( member );
})

// Say Hello to member who join

bot.on('guildMemberAvailable', ( member ) => {
    Welcome.$helloMsg( member );
})


bot.login(process.env.TOKEN)
