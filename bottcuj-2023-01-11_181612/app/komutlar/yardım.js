const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor("RANDOM")
      .setAuthor(`Zeus`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=531113869469417494&scope=bot&permissions=805829694)  | [Discord'uma Katılmayı Unuma](https://discord.gg/Cjt47W) |\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Zeus - Yardım`) 
      .addField("** :tada: Eğlence Komutları :tada:**", `>eğlence = Eğlence Komutlarını Gösterir `)
      .addField("** :busts_in_silhouette: Kullanıcı Komutları :busts_in_silhouette:**", `>kullanıcı = Kullanıcı Komutlarını Gösterir  `)
      .addField("** :musical_note: Müzik Komutları :musical_note:**", `>müzik = Müzik Komutlarını Gösterir  `)
      .addField("**:no_entry: Sunucu Yetkilisi Komutları :no_entry:**", `>yetkili = Sunucu Yetkilisi Komutlarını Gösterir.`)
      .addField("** :keyboard:  Ayarlanabilir Komutlar :keyboard: **", `>komutlar = Ayarlanabilir Komutları Gösterir `)
      .addField("**:gear:️ Botun Ana Komutları :gear:️**", "<aç6 = Botun Ana Komutlarını Gönderir.")
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };

