const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username}已經上線`);
    //修改機器人遊戲狀態(PLAYING, STREAMING, LISTENING, WATCHING)
    //bot.user.setActivity("蠟筆小新", {type: "WATCHING"});
    bot.user.setActivity("我叫MT");
});
//新成員加入or離開伺服器的系統公告
bot.on('guildMemberAdd', async member => {
    console.log(`${member.id} join the server.`);
    let welcomechannel = member.guild.channels.find(`name`,"魔獸打起來");
    welcomechannel.send(`各位注意! ${member} 誤上賊船LA !!`);

});
bot.on('guildMemberRemove', async member => {
    console.log(`${member.id} left the server.`);
    let welcomechannel = member.guild.channels.find(`name`,"魔獸打起來");
    welcomechannel.send(`各位注意! ${member} 安全下庄 !!`);

});
//新頻道被創建或刪除的系統公告
bot.on('channelCreate', async channel => {
    console.log(`${channel.name} has been created.`);
    let targetChannel = channel.guild.channels.find(`name`,"魔獸打起來");
    targetChannel.send(`🌋由於大規模的海底火山噴發 一塊新大陸 ${channel} 出現了!`);

});
bot.on('channelDelete', async channel => {
    console.log(`${channel.name} has been created.`);
    let targetChannel = channel.guild.channels.find(`name`,"魔獸打起來");
    targetChannel.send(`🌊隨著海平面上升 ${channel} 隨著亞特蘭提斯一同沉入水中`);

});


bot.on('message', message =>{
    //bot回話後跳出事件
    if(message.author.bot) return;

    //自定義回話
    if(message.content.includes("小雞雞")){
        message.react("💢");
    }
    if(message.content.includes("油膩")) message.channel.send("什麼? 油膩? 你說我油膩!?");
    if(message.content.includes("==")) message.channel.send("= =");
    if(message.content.includes("6")) message.react("🤙");
    if(message.content == "行") message.channel.send("我們行不行? 絕對沒問題!");
    if(message.content == "型") message.channel.send("我們行不行? 絕對沒問題!");
    if(message.content=="臉頰") message.channel.send("萌萌!");
    if(message.content.includes("閉嘴")) message.channel.send("你才閉嘴🖕");
    if(message.content === "?") message.channel.send("?");
    if(message.content.includes("我是誰")) message.channel.send("你是"+message.author.username);
    if(message.content.includes("@Frostwolf#1665"))message.channel.send("萩芳站起來!");
    if(message.content.includes("@希爾頓#4350")) message.channel.send(message.author.username+"想對你說:請你出去");
    if(message.content.includes("晚餐吃啥")){
        var restroom =['鬲饕','成功牛排','7-11','學餐'];
        var point = Math.floor(Math.random()*(restroom.length));
        message.channel.send("吃"+restroom[point]);
    }
    if(message.content.includes("點歌")){
        message.channel.send(
            ":headphones: 點歌:headphones: "+"\n"+
            "!join:將音樂BOT加入目前所在的語音頻道"+"\n"+
            "!p 歌曲名:BOT會以此為關鍵字從youtube搜尋歌曲(有時候會抓到奇怪的影片= =)"+"\n"+
            "!p youtube影片網址:同上,將歌曲加入BOT播放列表"+"\n"+
            "!playtop:使用方式同!p 只是加入的歌曲於當前歌曲播放完畢後就會開始播放"+"\n"+
            "!np:查詢現在播放的歌曲名稱"+"\n"+
            "!skip:跳過當前播放的歌曲"+"\n"+
            "!stop:暫停播放"+"\n"+
            "!resume:繼續播放"+"\n"+
            "!clear:清空BOT播放清單"+"\n"+
            "!disconnect or !leave:讓BOT離開語音頻道"+"\n"
        );
    }
    // if (message.content === '/join') {
    //     // Only try to join the sender's voice channel if they are in one themselves
    //     if (message.member.voiceChannel) {
    //       message.member.voiceChannel.join()
    //         .then(connection => { // Connection is an instance of VoiceConnection
    //           message.reply('I have successfully connected to the channel!');
    //         })
    //         .catch(console.log);
    //     } else {
    //       message.reply('請先加入語音頻道!');
    //     }
    //     const dispatcher = this.connection.playFile('C:/Users/user/Desktop/BOT/node_modules/ffmpeg-binaries/bin/_30163057.m4a');
    // }

    //自定義指令
    var messages = message.content.split(" ");
    if(messages[0]=="!roll"){
        var point = Math.floor(Math.random()*(100-1))+1;
        message.channel.send(message.author.username+"擲出了: "+point+"點");
        //console.log(point);
    }else if(messages[0]=="!Github"){
        message.channel.send("原始碼:https://github.com/peter6098790/Test-BOT");
    }else if(messages[0]=="!介紹"){
        message.channel.send("一個實驗性質的機器人，有想到什麼有趣的功能可以@小菜，但...不一定做得出來");
    }else{
        return;
    }

});

bot.login("");

