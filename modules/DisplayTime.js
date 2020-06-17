module.exports =  class displayTime {

    static $timeQ ( message ) {
        return message.content === '$time';
    }

    static $timeA ( message ) {
        let date = new Date(); 
        let currentTime = "It's " + date.getHours() + "h " + 
            date.getMinutes() + "m " + date.getSeconds() + "s " + 
            date.getMilliseconds() + "ms ";
        return message.channel.send("⏲️ - " + currentTime);
    }

    static $dateQ ( message ) {
        return message.content === '$date';
    }

    static $dateA ( message ) {
        let date = new Date();
        let currentDate = "It's " + date.getDate() + 
            "/0" + date.getMonth() + "/" + date.getFullYear();
        return message.channel.send("⏲️ - " + currentDate)
    }

}