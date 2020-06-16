module.exports =  class displayTime {

    static $timeQ ( message ) {
        return message.content === '!time';
    }

    static $timeA ( message ) {
        let date = new Date(); 
        let currentTime = "It's " + date.getHours() + "h " + 
            date.getMinutes() + "m " + date.getSeconds() + "s " + 
            date.getMilliseconds() + "ms ";
        return message.channel.send("⏲️ - " + currentTime);
    }

}