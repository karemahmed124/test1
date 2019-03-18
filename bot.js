const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Crezma ,! [-]`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setTitle(" 😃 عضو جديد دخل السيرفر")
  .setColor("RANDOM")
  .addField("اسم العضو",`${member}`)
  .addField("ايدي العضو",`${member.id}`)
  .addField("رقم العضو",`${member.guild.memberCount}`)
  .setThumbnail("http://www.ymcaswkansas.org/sites/ymcaswkansas.org/files/civicrm/friend.png")
  var channel =member.guild.channels.find('name', 'general')
if (!channel) return;
      channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
  var embed = new Discord.RichEmbed()
  .setTitle("عضو غادر السيرفر")
  .setColor("RANDOM")
  .addField("اسم العضو",`${member}`)
  .addField("ايدي العضو",`${member.id}`)
  .addField("تبقى",`${member.guild.memberCount}`)
  .setThumbnail("https://cdn.onlinewebfonts.com/svg/img_948.png")
  var channel =member.guild.channels.find('name', 'general')
  if (!channel) return;
        channel.send({embed : embed});
  });

client.login(process.env.BOT_TOKEN);
