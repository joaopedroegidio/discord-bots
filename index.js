const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const { Server } = require("http");
const bot = new Discord.Client();
const variaveis = require('./configs.json')

/*
  __   __  ______      _______  _______  _______  _______
 |  | |  ||    _ |    |  _    ||       ||       ||       |
 |  |_|  ||   | ||    | |_|   ||   _   ||_     _||  _____|
 |       ||   |_||_   |       ||  | |  |  |   |  | |_____
 |       ||    __  |  |  _   | |  |_|  |  |   |  |_____  |
 |   _   ||   |  | |  | |_|   ||       |  |   |   _____| |
 |__| |__||___|  |_|  |_______||_______|  |___|  |_______|
 
 */

bot.commands = new Discord.Collection();

bot.on("ready", () => {

    bot.user.setActivity('Discord dos meus criadores: https://discord.gg/QJTWRYT');

    console.log(`Logado como ${bot.user.tag}`)

    console.log(`-----------------------\n
    TAG: ${bot.user.tag}\n
    Usuários: ${bot.users.cache.size}\n
    Canais: ${bot.channels.cache.size}\n
    Servidores: ${bot.guilds.cache.size}\n
    -----------------------`)
})

//Carregar os comandos

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        bot.commands.set(props.help.name, props, props.help.aliases);
    });
});

bot.on("message", async (message, member) => {

    if (message.author.bot) return;


    const embedmarcaçao = new Discord.MessageEmbed()
        .setTitle(`${variaveis.emojisino} | ${variaveis.tituloembedmarcaçao}`)
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription(`${variaveis.mensagemmarcaçao}`)
        .setFooter('Sistema desenvolvido pela HR Bot!')
        .setColor('RANDOM')
    if (message.content === `<@!${bot.user.id}>` || message.content === `<@${bot.user.id}>`) return message.reply(embedmarcaçao)

    const embeddm = new Discord.MessageEmbed()
        .setTitle(`${variaveis.emojipepe} ${variaveis.titulomensagemdm}`)
        .setDescription(`${variaveis.mensagemdm}`)
        .setFooter('Sistema desenvolvido por HR Bots')
        .addField(`Meu servidor:`, '[Clique aqui](https://discord.gg/KWxkYcr)')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/753683631238545516/753764930649587722/Vermelho.png')

    if (message.channel.type === "dm") return message.channel.send(embeddm);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args, member);

});
bot.login(config.token); 