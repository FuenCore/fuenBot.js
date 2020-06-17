module.exports = class Pong {

    static $PongQ ( message ) {
        let PRE = "$";
        return message.content === PRE + "ping";
    }

    static $PongA ( message ) {
        return message.channel.send('🏓 - Pong !');
    }

}