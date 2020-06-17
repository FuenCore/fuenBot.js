const Discord = require('discord.js');
const bot = new Discord.Client();
bot.music = require('discord.js-musicbot-addon');

const DisplayTime = require('./modules/DisplayTime');
const Pong = require('./modules/Pong');
const DataHook = require('./modules/DataHook');
const Welcome = require('./modules/Welcome')

require('dotenv').config();

const AllCmd = {
    "cmd": [
        "$ping", 
        "$time", 
        "$date",
        "$myId",
        "$myPseudo"
    ],
    "modules": [
        Pong,
        DisplayTime,
        DisplayTime,
        DataHook,
        DataHook
    ],
    "functions": [
            bot.on('message', message => {
                if( Pong.$pongQ( message ) ) {
                    return Pong.$pongA( message )
                }
            }),
            bot.on('message', message => {
                if( DisplayTime.$timeQ( message ) ) {
                    return DisplayTime.$timeA( message )
                }
            }),
            bot.on('message', message => {
                if( DisplayTime.$dateQ( message ) ) {
                    return DisplayTime.$dateQ( message )
                }
            }),
            bot.on('message', message => {
                if( DataHook.$myIdQ( message ) ) {
                    return DataHook.$myIdA( message )
                }
            }),
            bot.on('message', message => {
                if( DataHook.$myPseudoQ( message ) ) {
                    return DataHook.$myPseudoA( message )
                }
            })
        ],
    "desc": [
        "Reply 'Pong !' ...",
        "Display current time.",
        "Display current date.",
        "Display user id.",
        "Display user pseudo + #tag."
    ]
}

bot.on('ready', () => {
    console.log("I'm ready sir !")
})

// Loop to generate all the commands stocked in AllCmd

for( let i = 0; i < AllCmd.cmd.length; i++) {
    AllCmd.functions[i]
}

// Say Welcome to new member

bot.on('guildMemberAdd', ( member ) => {
   Welcome.$welcomeMsg( member );
})

// Say Hello to member who join

bot.on('guildMemberAvailable', ( member ) => {
    Welcome.$helloMsg( member );
})

bot.on('message', ( message ) => {
    if( message.content === "$cmd" ) {
        for(let i = 0; i < AllCmd.cmd.length; i++) {
            message.channel.send(AllCmd.cmd[i] + ": " + AllCmd.desc[i])
        }
    }
} )

// Token for bot

bot.login(process.env.TOKEN)
