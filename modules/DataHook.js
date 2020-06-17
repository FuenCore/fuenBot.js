const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = class DataHook {


    static $myIdQ( message ) {

        let PRE = "$";

        return message.content === PRE + 'myId';

    }

    static $myIdA( message ) {

        console.log(message.member)
        return message.channel.send(message.member.id)

    }

    static $myPseudoQ( message ) {

        let PRE = "$";

        return message.content === PRE + "myPseudo";

    }

    static $myPseudoA( message ) {

        return message.channel.send("Did you lost your name " + message.member.user.tag + " ?")

    }

}