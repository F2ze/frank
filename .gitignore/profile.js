module.exports = class Profile {

    static match (message) {
        return message.content.startsWith('!profile')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.habbocity.me/profil/' + args.join('/'))
    }
}
