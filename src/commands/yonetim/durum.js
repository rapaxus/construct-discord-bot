const { Command } = require('discord.js-commando');
class durum extends Command
{
    constructor(client)
    {
        super(client,{
            name: 'durum',
            group: 'yonetim',
            memberName: 'durum',
            description: 'bot durumunu değiştir ',
            examples: ['durum'],
            args: [
                {
                  key: 'durum',
                  prompt: 'durum yazısı',
                  type: 'string',
                  default: ' '
                },
                {
                  key: 'tur',
                  prompt: 'Durum türü',
                  type: 'string',
                  default: ' '
                },
                {
                  key: 'yayin',
                  prompt: 'yayin linki',
                  type: 'string',
                  default:false
                }
            ]
        })
    }
    /*
    hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        if ((msg.channel.type !== "dm")) return false;
        return msg.member.hasPermission('Admin') || this.client.isOwner(msg.author) || (msg.member.id == "174242106766786570");
        174242106766786570 bilge
        196754325794455552 baby
        531086739876478976 furkan
        350009686117974037 vetx
        579257592430460929 ahmet
        478933409276624896 eren
    }
  */
    run(msg,durum,tur,yayin) {
      var d = {oyna:0,yayin:1,dinle:2,izle:3};
      let arg = JSON.stringify(durum);
      let j = JSON.parse(arg);
      if (msg.channel.type == "dm")
      {
        if ((msg.author.id == "174242106766786570") || (msg.author.id == "478933409276624896") || (msg.author.id == "579257592430460929") || (msg.author.id == "350009686117974037")|| (msg.author.id == "531086739876478976") || (msg.author.id == "196754325794455552") || (msg.author.id == "286916244840382464"))
        {
          if (j.yayin !== false && j.tur == "yayin")
          {
              this.client.user.setActivity(j.durum, { type: d[j.tur],url:j.yayin});
          }
          else if (j.durum == " ") 
          {
              this.client.user.setActivity(j.durum, { type: 4});
              msg.channel.send("Kullanım !durum 'durum yazısı' durum türü şeklindedir.\n Durum türleri: oyna,yayin,dinle,izle 'dir \n örnek kullanım !durum 'world of warcraft' oyna \n örnek stream: !durum 'construct2 eğitimi' yayin twitchlinki" );
          }
          else
          {
            this.client.user.setActivity(j.durum, { type: d[j.tur]});
          }
        }
      }
    }
}


module.exports = durum;