const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client();
const Profile = require('E:/Programmes/nodejs/Projets/Frank/profile')

const PREFIX = "!"

bot.on('ready', function () {
    console.log("Prêt")
})

bot.on('ready', function () {
    // bot.user.setAvatar('E:/Utilisateurs/Etienne/Etienne/HabboCity/Discord/Frank.png').catch(console.error)
    bot.user.setActivity('habbocity.me').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send("Bienvenue sur notre serveur " + member.displayName)
    }).catch(console.error)
})

bot.on('message', message => {
    if (Profile.match(message)) {
        return Profile.action(message)
    }
    if (message.content[0] === PREFIX)
        if (message.content === '!help') {
            message.channel.send("Besoin d'aide ? Frank à la rescousse !");
        }
})

bot.on('message', message => {
    if (message.content[0] === PREFIX)
        if (message.content === '!tigger') {
            message.channel.send("tigger, le plus gentil des tigres");
        }
})

bot.on('message', function (message) {
    if (message.content === '!best') {
        if (message.content[0] === PREFIX)
            message.reply('le meilleur de tout HabboCity !')
    }
})

bot.login('NDIxMDM2NTk0NTgxOTk1NTIy.DYHYgw.zDy-cpvMdwsoBTYYVLQIt2MD0wE')

function newFunction() {
    return bot.on;
}
