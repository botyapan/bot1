const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('RANDOM')
  .addField("** :tada: Eğlence Komutları :tada:**", `>atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir.\n>espiri = Eğlenceli Espiri Yapar\n>kahkaha = Kahkaha Atarsınız. \n>stresçarkı = Stres Çarkı Çevirirsiniz. \n>yaz = Bota Yazı Yazdırmanızı Sağlar \n>tkm = Taş Kağıt Makas Oynamanıza Yarar \n>emojiyazı = Emojiyle Yazmanızı Sağlar  \n>herkesebendençay = Herkese Çay Alırsınız. \n>koş = Koşarsınız.\n>çayiç = Çay İçersiniz. \n>çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n>çayaşekerat = Çaya Şeker Atarsınız. \n>yumruk-at = Yumruk Atarsınız. \n>şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. `)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir',
  usage: 'eğlence'
};
