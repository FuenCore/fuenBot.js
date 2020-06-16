module.exports = class welcome {

    static $welcomeMsg( member,  ) {
        member.createDM().then(( channel ) => {
            channel.send("Welcome to the FuenServ " + member.displayName );
        }).catch(console.error);
    }

}

