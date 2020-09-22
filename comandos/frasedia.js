const Discord = require('discord.js');


module.exports.run = async (bot, message, args, member) => {

    const author = message.author;
    const data = args.pop();
    const frase = args.splice(1).join(" ");
    const membro = message.mentions.members.first();
    const canal = bot.channels.cache.get('757326192763207801');

    if (!args[0]) return message.reply("use: \`!fdia <autor> <frase> <data> \`") //Verifica se tem o primeiro argumento

    message.channel.send(`${author}, Frase do dia foi enviada em ${canal}!!!`);

    let embed = new Discord.MessageEmbed()
        .setTitle('*FRASE DO DIA!*')
        .setDescription(`\n_${frase}_\n\n${membro} - ${data}`)
        .setColor('RANDOM')
        .setFooter("Bot desenvolvido por Hr Bot´s. (Pelo JPEDRO TA)", "https://media.discordapp.net/attachments/746002304515440661/746006232334073902/bot-icon-12.png?width=585&height=585")
        .setImage('https://media.discordapp.net/attachments/723598442349330435/757320184200429748/Z.png')

    canal.send('@everyone', embed);
};
module.exports.help = {
    name: 'fdia'
};