const Discord = require('discord.js');


module.exports.run = async (bot, message, args, member) => {

    const membro = message.mentions.members.first();
    const author = message.author;
    const canal = bot.channels.cache.get('757307877403656313');

    if (!args[0]) return message.reply("use: \`!spam <@membro>\`") //Verifica se tem o primeiro argumento

    message.channel.send(`${author}, spam efetuado com sucesso!!!`);

    canal.send(`${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}, ${membro}!!!\n\nBy ${author}!`);
};
module.exports.help = {
    name: 'spam'
};