const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message =>{
    //bot回話後跳出事件
    if(message.author.bot){
        return;
    }

    //自定義回話
    if(message.content=="==" | "= =" | "-.-"){
        message.channel.send("= =");
    }
    if(message.content=="行" | "型" | "形"){
        message.channel.send("我們行不行? 絕對沒問題!");
    }
    if(message.content=="臉頰"){
        message.channel.send("萌萌!");
    }
    if(message.content=="閉嘴"){
        message.channel.send("閉嘴");
    }
    if(message.content=="?" | "??" | "???"){
        message.channel.send("?");
    }
    if(message.content=="我是誰?" | "猜猜我是誰?"){
        message.channel.send("你是"+message.author.username);
    }
    if(message.content=="Frostwolf#1665"){
        message.channel.send("萩芳站起來!");
    }
    if(message.content=="@希爾頓#4350"){
        message.channel.send("請你出去");
    }
    if(message.content=="晚餐吃啥"){
        var restroom =['鬲饕','成功牛排','7-11'];
        var point = Math.floor(Math.random()*(restroom.length));
        message.channel.send("吃"+restroom[point]);
    }
    if(message.content=="點歌指令"){
        message.channel.send(
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

    //自定義指令
    var messages = message.content.split(" ");
    if(messages[0]=="!roll"){
        var point = Math.floor(Math.random()*(100-1))+1;
        message.channel.send(message.author.username+"擲出了: "+point+"點");
        //console.log(point);
    }else if(messages[0]=="!Github"){
        message.channel.send("原始碼:https://github.com/peter6098790/Test-BOT");
    }else if(messages[0]=="!介紹"){
        message.channel.send("原始碼:https://github.com/peter6098790/Test-BOT");
    }else{
        return;
    }

});



