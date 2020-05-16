const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzA3Nzk5MTMyODE0NzA0Njkx.XrcFCw.pv7CmLNtms7eW_p2tnlWodNQYks';

const PREFIX = '$'

client.on('ready', () => {

  switch(args[0]) {}
   client.on('message', message =>{

      let args = message.content.substring(PREFIX.length.split(""));
     
      switch(args[0]){
        case 'help':
          message.reply('pastebin https://pastebin.com/Gjr8BnAz');
        break;
        case'info':
          message.reply('Made by xXSwing™ 5/7/2020');
        break;
        case 'author':
          message.reply('xXSwing#8013');
        break;
        case 'failure':
          message.reply('Me_Failrue 🍆 is hard.');
        break;
        case 'devilz':
          message.reply('https://www.roblox.com/groups/5077356/Devilsz#!/about');
        break;
        case 'angelz':
          message.reply('https://www.roblox.com/groups/5488398/Deadly-AngeLZ#!/about');
        break;
        case 'chanekes':
          message.reply('https://www.roblox.com/groups/5036877/Chanekes#!/about');
        break;
        case 'eamily':
          message.reply('eamily is a 👑!');
        break;
        case 'guest':
          message.reply('Guest is a 🐐!');
        break;
        case 'ninito':
          message.reply('ninito is the best Da Hood leader!');
        break;
        case 'juan':
          message.reply('Juan es mi amigo');
        break;
        case 'booze':
          message.reply('Take a sip :tropic_drink: and feel the greatest laugh of all time!');
        break;
        case 'enforce':
          message.reply('🚨 FBI OPEN UP');
        break;
        case 'aidin':
          message.reply('Edgenuity u watch videos and then they give u a quiz - Aidin');
        break;
      }  
   })
});
client.login(token);
