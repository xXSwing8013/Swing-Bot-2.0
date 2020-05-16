const Discord = require('discord.js');
const client = new Discord.Client();

const token1 = 'NzEwODc3MDk4NTc0ODcyNjA3.Xr9xTg.sxXTQgGv4w4hLTF9xVHqvwypwCo';

const PREFIX = '+';

client.on('ready', () =>{
    console.log('This bot is online!');
})

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case'test':
            message.reply('Bot is online!');
            break;
        case'cmd':
            message.reply('https://pastebin.com/nLb21Ewf full command list');
            break;
        case'patreon':
            message.reply('https://www.patreon.com/xXSwing');
            break;
        case 'author':
            message.reply('xXSwing#8013')
            break;
        case 'jesmar':
            message.reply('https://www.roblox.com/users/247525563/profile');
            break;
        case 'ttv':  
            message.reply('https://www.roblox.com/users/1075239751/profile');
            break;   
        case'achro':
            message.reply('https://www.roblox.com/users/377373465/profile');
            break;
        case'ally':
            message.reply('https://www.roblox.com/groups/5608197/Dead-End#!/about');
            break;
        case'tne':
            message.reply('https://www.roblox.com/groups/6253281/The-New-Era-Da-Hood#!/about');
            break;
        case 'ps':
            message.reply('https://www.roblox.com/games/2788229376/Da-Hood?privateServerLinkCode=stsCE3213sG8nDCITbtOQVXMH_yqo4yJ');
            break;
        case'vipers':
            message.reply('https://www.roblox.com/groups/5055250/South-Side-Vipers');
            break;
        case'yt':
            message.reply('https://www.youtube.com/channel/UCMpwstFhQJemtNU0sH_2PfQ?view_as=subscriber');
            break;
    
    }

})

client.login(process.env.BOT_TOKEN);
