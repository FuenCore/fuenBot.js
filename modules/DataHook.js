const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = class DataHook {

    static $findIdQ( message ) {

        let PRE = "$";

        return message.content === PRE + 'myId';

    }

    static $findIdA( message ) {

        console.log(message.member)
        return message.channel.send(message.member.id)

    }

}