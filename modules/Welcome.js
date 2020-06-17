require('dotenv').config();

module.exports = class welcome {

    static $welcomeMsg( member ) {
        member.createDM().then(( channel ) => {
            channel.send("Welcome to the " + process.env.SERVNAME + member.displayName );
        }).catch(console.error);
    }

    static $helloMsg( member ) {
        member.send("Good to see you " + member.displayName);
    }

}

