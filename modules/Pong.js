module.exports = class Pong {

    static $pongQ ( message ) {
        let PRE = "$";
        return message.content === PRE + "ping";
    }

    static $pongA ( message ) {
        return message.channel.send('🏓 - Pong !');
    }

}