require("dotenv").config();  
require("./config");

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");  
  const util = require("util");  
  const chalk = require("chalk");  
  const ytdl = require("@distube/ytdl-core");
  const yts = require("youtube-yts");
  const googleTTS = require("google-tts-api");
  const Replicate = require("replicate")
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library"); 
  const os = require('os');
  const { 
     cpus, 
     totalmem, 
     freemem 
 } = require("os");
  const osu = require("node-os-utils");
  const fg = require('api-dylux'); 
  const { pipeline } = require('stream'); 
  const { promisify } = require('util'); 
  const { 
     sizeFormatter 
 } = require("human-readable");
  const streamPipeline = promisify(pipeline);
  var videotime = 60000 // 1000 min 
  var dlsize = 1000 // 1000mb
  
  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)
const isOnr = mek.key.fromMe;
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const owner = ["919938770375"];
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let banUser = JSON.parse(fs.readFileSync('./database/banChat.json'));

const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
let voicereply = JSON.parse(fs.readFileSync('./media/audio.json'));
const more = String.fromCharCode(8206) 
const readMore = more.repeat(4001)

const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')
 
//=================================================//}  
//  Bot Prosess Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

//Uptime
  const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minutes*\n *⏱️ ${seconds} Seconds*\n`;
  
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 const pingSt = new Date();
 
 //System info
 async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();

   // const chats = Object.entries(client.chats).filter(([id, data]) => id && data.isChats) 
   //  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only) 
     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })



let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *📍 ɪᴘ:* ${ip} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
  *🔁 NᴇᴛꜱIɴ:* ${netsIn} 
  *🔁 NᴇᴛꜱOᴜᴛ:* ${netsOut} 
  *💿 DʀɪᴠᴇTᴏᴛᴀʟ:* ${driveTotal} 
  *💿 DʀɪᴠᴇUꜱᴇᴅ:* ${driveUsed} 
  *⚙️ DʀɪᴠᴇPᴇʀ:* ${drivePer} 
 
  *乂 ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}



           //TIME Wisher 
 const xtime = moment.tz('Asia/Karachi').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Karachi').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Karachi').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function sendPooll(jid, text, list) {
client.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}


async function doReact(emoji) {
      let reactm = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await client.sendMessage(from, reactm);
    }

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function fetchJson(url, options) {
    try {
        options ? options : {};
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        });
        return res.data;
    } catch (err) {
        return err;
    }
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 AZAN.JSON BOT HERE》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, {quoted: m})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  



async function typewriterEffect(text, key) {
// let { key } = await client.sendMessage(from, {text: 'Thinking...'}, {quoted: m})

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1);
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: noobText
        }
      }
    }, {});
 //  await delay(100); // Adjust the delay time (in milliseconds) as needed
  }
}



/*
async function typewriterEffect(from, m, text) {
  let { key } = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1);
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: noobText
        }
      }
    }, {});
    //  await delay(100); // Adjust the delay time (in milliseconds) as needed
  }
}
*/

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./database/user.json", JSON.stringify(pendaftar));
    }
const totalUsers = pendaftar.length;

    if (global.autoRecord) {
      if (m.chat) {
       client.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        client.sendPresenceUpdate("composing", m.chat);
      }
    }
/*
    if (global.available) {
      if (m.chat) {
        client.sendPresenceUpdate("available", m.chat);
      }
    }
*/
    if (global.autoread) {
      if (command) {
     //   await A17.sendPresenceUpdate("composing", m.chat);
        client.readMessages([m.key]);
      }
    }

if (global.available) {
      client.sendPresenceUpdate("available", m.chat);
    } else {
      client.sendPresenceUpdate("unavailable", m.chat);
    }


 // Auto Voice Reply
 

 for (let voicemsg of voicereply){

      if (body == voicemsg){
        result = fs.readFileSync(`./media/Audio/${voicemsg}.mp3`)
        
        client.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
        }
 
  }


  
if (!isCmd && !mek.key.fromMe) {
  if (text == 'Hi') {
 // await typewriterEffect(from, m, "How can i assist you to day ?")
  // Handle relayMessageResponse as needed
}
}
  
if (global.chatbot) {
if (!isCmd && !mek.key.fromMe && !m.isGroup){
if (isBan) return m.reply(replai.banned);

  try {
    const userInput = text; // Replace this with the actual user input
   console.log('Received message:', userInput);

    let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
    const { key } = thinkingMessage;

    const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;
    let response = await axios.get(apiEndpoint);
    let responseData = response.data;

    if (responseData.result) {
      const result = responseData.result;
      await typewriterEffect(result, key);
const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
    } else {
      console.log('API returned an unexpected response:', responseData);
    }
  } catch (error) {
    console.error(error);
  }
 
  //  const botreply1 = await axios.get(`http://api.brainshop.ai/get?bid=177717&key=uooLJDuf8KeXO1fv&uid=[uid]&msg=[${text}]`)

    //jawab = `${botreply1.data.cnt}`
   // m.reply(jawab)
     
    }    
}
      // Group  
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";  
     const groupName = m.isGroup ? groupMetadata.subject : "";  
  
      // Push Message To Console  
      let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;  
  
      if (isCmd && !m.isGroup) {  
        console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));  
      } else if (isCmd && m.isGroup) {  
        console.log(  
          chalk.black(chalk.bgWhite("[ LOGS ]")),  
          color(argsLog, "turquoise"),  
          chalk.magenta("From"),  
          chalk.green(pushname),  
          chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),  
          chalk.blueBright("IN"),  
          chalk.green(groupName)  
        );  
      }  
  
      if (isCmd) {  
        switch (command) {  
          case "help":  
          case "menu":
          case "AZAN":
          case "azan":  
  if (isBan) return m.reply(replai.banned);	 	
await doReact("🫶🏻");

     let me = m.sender 


 await loading();;
  const helpmenu =` 
╭––『 *${global.BotName}* 』 
┆ Hi 👋  
╰–❖  *${pushname}* 
╭–––––––––––––––༓ 
┆✑  *${pushwish}* 😄 
╰–––––––––––––––༓ 
╭–– 『 *Bot Info* 』      
┆ *Bot Name* : *${global.BotName}*
┆ *Owner Name* : *${global.OwnerName}*
┆ *Prefix* :  *${prefix}*
┆ *Total Users* : *${totalUsers}*
┆ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
┆ *Mode* : *Public*
╰–––––––––––––––༓ 
╭––『 *User Info* 』 
┆𝗡𝗮𝗺𝗲 : *${pushname}*
┆𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]} 
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ✅ 
╰–––––––––––––––༓ 
╭––『 *Time Info* 』 
┆𝗧𝗶m 𝗲 : *${xtime}*
┆𝗗𝗮𝘁𝗲 : *${xdate}*
╰–––––––––––––––༓ 
╭––『 *Help* 』 
┆✑  Please Type The */help* 
╰–––––––––––––––༓ﾠ 
${readMore}
╭––『 *ChatGPT* 』ﾠ 
┆❏.gpt 🅕 
┆❏.dall 🅕 
╰–––––––––––––––༓ 
╭––『 *Bard* 』 
┆❏.bard 🅕 
┆❏.imagine 🅕 
╰–––––––––––––––༓
╭––『 *LLama* 』 
┆❏.lama 🅕 
┆❏.lama2img 🅕 
╰–––––––––––––––༓
╭––『 *Stable Diffusation* 』 
┆❏.stable 🅕 
╰–––––––––––––––༓
╭––『 *Bot* 』ﾠ 
┆❏.system 🅕
┆❏.script 🅕
┆❏.settings 🅕
┆❏.ping 🅕 
┆❏.alive 🅕 
┆❏.bug 🅕 
┆❏.setbio 🅕 
┆❏.setname 🅕 
╰–––––––––––––––༓ 
╭––『 *Sticker menu* 』 
┆❏.sticker🅕 
╰–––––––––––––––༓
╭––『 *Search menu* 』ﾠ 
┆❏.google 🅕 
┆❏.insta 🅕 
┆❏.github 🅕
┆❏.yts 🅕
┆❏.ff 🅕
┆❏.weather 🅕
┆❏.play 🅕
╰–––––––––––––––༓ 
╭––『 *Tools* 』ﾠ 
┆❏.tts 🅕 
┆❏.short 🅕
┆❏.emix <emoji>+<emoji> 🅕 
┆❏.encrypt 🅕 
┆❏.decrypt 🅕 
╰–––––––––––––––༓ 
╭––『 *Downloader* 』 
┆❏.gitclone 🅕
┆❏.song 🅕
┆❏.video 🅕
┆❏.fb 🅕
┆❏.gdrive 🅕
╰–––––––––––––––༓
          `; 

client.sendMessage(m.chat, {
video:fs.readFileSync('./media/X-2.0_2.mp4'),
gifPlayback:true,
caption: helpmenu,
contextInfo: {
externalAdReply: {
title: `MatrixCoder`, 
body: 'Follow Me',
thumbnailUrl: "https://telegra.ph/file/acc0bd65f6a5e8a1ee0c6.jpg", //https://telegra.ph/file/acc0bd65f6a5e8a1ee0c6.jpg
sourceUrl: "https://github.com/azanazhar", 
mediaType: 1,
renderLargerThumbnail: true
}} 
},
 {quoted: m})
break;
case 'snap':
  let codeText = text;

  try {
    let response = await axios.post('https://carbonara.solopov.dev/api/cook', {
      code: codeText,
      backgroundColor: '#1F816D',
    }, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to generate the code image.');
    }

    //conn.sendFile(m.chat, response.data, 'code.png', 'Here is the code image:', m);
  client.sendMessage(m.chat, {
        image: {
          url: response.data,
        },
        caption: 'Here is the code image.',
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while generating the code image.');
  }
break;
case 'imagine':
  if (isBan) return m.reply(replai.banned);	 	
  if (!text) throw `*You can generate images From text using this command*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} Elon musk with Irom man*`; 

async function fetchImageData() {
  await doReact("⏳");
  let thingMsg = await client.sendMessage(m.chat, { text: 'Generating Images Please wait...' });
  const texti = text;
  try {
    const response = await axios.get(`https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${texti}`);
    const data = response.data;

    const images = data.image_links;
    const timeforgen = data.execution_time;
    const genetd =  `✅ Sucsessfully generated in ${timeforgen}`
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageLink = images[randomImageIndex];
    console.log(randomImageLink);
    await client.sendMessage(m.chat, {
        image: {
          url: randomImageLink,
        },
        caption: text,
      }, {
        quoted: m,
      });
     await client.relayMessage(m.chat, {
      protocolMessage: {
        key: thingMsg.key,
        type: 14,
        editedMessage: {
          conversation: genetd
        }
      }
    }, {});
    await doReact("✅");
    console.log(genetd)
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

fetchImageData();

break;
case 'poll': {

            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await m.reply(
                    `Example: ${prefix}Which is The Best Programming Language?|Python,JavaScript`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break;
        
case 'ff':
// Async function to fetch data by player UID
async function fetchPlayerData(uid) {
  const options = {
    method: 'GET',
    url: `https://id-game-checker.p.rapidapi.com/ff-global/${uid}`,
    headers: {
      'X-RapidAPI-Key': 'b0d2047100msh2552413fe212f68p11478bjsn3e66c3d08ce3',
      'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const username = response.data.data.username; 
    const userId = response.data.data.userId;
    const game = response.data.data.game;
    const region = response.data.data.region;
    m.reply(`
    *I N F O*
    Game: *${game}*
    Name: *${username}*
    UID: *${userId}*
    Region: *${region}*
     `);
  } catch (error) {
    console.error(error);
  }
}

// Example of how to use the function
const playerUID = text; // Replace with the player's UID
fetchPlayerData(playerUID);

break;

case 'settings':
case 'setting':
if (!isOnr) return m.reply(replai.botowner);  
m.reply(`
╭––『 *Bot Settings* 』ﾠ 
┆❏.autotyping 🅕 
┆❏.autorecord 🅕 
┆❏.auto-bio 🅕
┆❏.always-online 🅕
┆❏.autoread 🅕
┆❏.anti-call 🅕
╰–––––––––––––––༓ 
`)

break;

case 'chatbot':
case 'auto-ai':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.chatbot = true;
      m.reply('ChatBot is now enabled.');
     }
     else if (text === 'off') {
     global.chatbot = false;
      m.reply('ChatBot is now disabled.'); 
     } else {
      m.reply('Usage: /chatbot on/off');
      
    }

  break;


case 'autotyping':
case 'auto-typing':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoTyping = true;
      m.reply('auto-typing is now enabled.');
     }
     else if (text === 'off') {
     global.autoTyping = false;
      m.reply('auto-typing is now disabled.'); 
     } else {
      m.reply('Usage: /auto-typing on/off');
      
    }

  break;

case 'auto-bio':
case 'autobio':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoBio = true;
      m.reply('auto-bio is now enabled.');
     }
     else if (text === 'off') {
     global.autoBio = false;
      m.reply('auto-bio is now disabled.'); 
     } else {
      m.reply('Usage: /auto-bio on/off');
      
    }

  break;
  

case 'anti-call':
case 'anticall':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.antiCall = true;
      m.reply('Anti-Call is now enabled.');
     }
     else if (text === 'off') {
     global.antiCall = false;
      m.reply('Anti-Call is now disabled.'); 
     } else {
      m.reply('Usage: /anti-call on/off');
      
    }

  break;
case 'always-online':
case 'available':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.available = true;
      m.reply('always-online is now enabled.');
     }
     else if (text === 'off') {
     global.available = false;
      m.reply('always-online is now disabled.'); 
     } else {
      m.reply('Usage: /always-online on/off');
      
    }

  break;

case 'autoread':
case 'auto-read':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoread = true;
      m.reply('Auto Read is now enabled.');
     }
     else if (text === 'off') {
     global.autoread = false;
      m.reply('Auto Read is now disabled.'); 
     } else {
      m.reply('Usage: /auto-read on/off');
      
    }

  break;
  
  
case 'autorecord':
  case 'auto-recording':
 if (!isOnr) return m.reply(replai.botowner);
client.sendMessage(from, { react: { text: '❤', key: m.key }});

//  if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
    const status = text;
    if (status === 'on') {
      global.autoRecord = true;
      return m.reply(`Auto recording is now *enabled*.`);
    } else if (status === off) {
      global.autoRecord = false;
      return m.reply(`Auto recording is now *disabled*.`);
    }
   else {
    m.reply(`Usage: \`${prefix}autorecord [on/off]\``);
   
  }
  break;



case 'encrypt':
  if (isBan) return m.reply(replai.banned);	 	
  if (!text && !m.quoted) return m.reply(`Ek Text put kar jisko tu Encrypt karna chahta he.`);
// const encryptedStr = btoa(text);
// m.reply(encryptedStr);
   try {
  // if (!text) return m.reply(`Ek Text put kar jisko tu Encrypt karna chahta he.`);
   if ( m.quoted && m.quoted.text) {
    
      try {
       // let data = m.quoted.text;
        let result = btoa(m.quoted.text);
        m.reply(result);
      } catch {
        return m.reply(` Sorry me isko Encrypt nahi kar sakta.`);
      }
    } else if (text) {
     // let lang = text.slice(0, 2);
      try {
        let data = text;
        let result = btoa(data);
        m.reply(result);
      } catch {
        return m.reply(` Sorry me isko Encrypt nahi kar sakta.`);
      }
    }
  } catch (error) {
    console.error("Error in:", error);
    m.reply(` An error occurred while Encrypting.`);
  }
  break;
 
break;

case 'decrypt':
  if (isBan) return m.reply(replai.banned);	 	
 if (!text && !m.quoted) return m.reply(`Ek Text put kar jisko tu Decrypt karna chahta he.`);
  //const decryptedStr = atob(text);
 // m.reply(decryptedStr);
  
     try {
  // if (!text) return m.reply(`Ek Text put kar jisko tu Encrypt karna chahta he.`);
   if ( m.quoted && m.quoted.text) {
    
      try {
       // let data = m.quoted.text;
        let result = atob(m.quoted.text);
        m.reply(result);
      } catch {
        return m.reply(` Sorry me isko Decrypt nahi kar sakta.`);
      }
    } else if (text) {
     // let lang = text.slice(0, 2);
      try {
        let data = text;
        let result = atob(data);
        m.reply(result);
      } catch {
        return m.reply(` Sorry me isko Decrypt nahi kar sakta.`);
      }
    }
  } catch (error) {
    console.error("Error in:", error);
    m.reply(` An error occurred while Decrypting.`);
  }
break;


case 'moovi':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
if (!text) return m.reply(`_Name a Series or movie`);

            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           client.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })  
break;
  

case 'system':
case 'sys':
case 'platform':
case 'info':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
  mainSys();
break;

case 'lama':
  if (isBan) return m.reply(replai.banned);	 	
  client.sendMessage(m.chat, { text: 'Thinking...' })
  const replicate = new Replicate({
  auth: global.ReplicateApi,
});

const output = await replicate.run(
  "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
  {
    input: {
      prompt: text
    }
  }
);
const formattedSentence = output.reduce((sentence, word) => {
  return sentence + word;
}, '');

console.log(formattedSentence);
//await typewriterEffect(from, m, formattedSentence);


//console.log(output)
break;
/*
case 'lama2img':
  const replica = new Replicate({
  auth: global.ReplicateApi,
});

const mode = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
const inpu = { prompt: text };
const outpu = await replica.run(mode, { inpu });

console.log(outpu);

break;

case 'hello':
  const customText = "Your custom text here"; // Replace with your desired text
await typewriterEffect(customText);
break;
  */     
case 'ban': {
  if (!isOnr) return m.reply(replai.botowner);
  if (m.quoted) {
    const senderId = m.quoted.sender;
    
    // Check if the sender's WhatsApp ID is already in the ban list
    if (banUser.includes(senderId)) {
      return m.reply('This user is already banned.');
    }
    
    // Add the sender's WhatsApp ID to the ban list
    banUser.push(senderId);
    
    // Save the updated ban list to the file
    fs.writeFileSync('./database/banChat.json', JSON.stringify(banUser));
    
    // Notify the user that they have been banned
    return m.reply('User Sucsessfully Banned.');
  } else {
    // If there's no valid reply, inform the user to use /ban as a reply to another message
    return m.reply('Please reply to a message with /ban to ban the user.');
  }
}
break;

case 'unban': {
  if (!isOnr) return m.reply(replai.botowner);
  if (m.quoted) {
    // Remove the sender's WhatsApp ID from the ban list
    const index = banUser.indexOf(m.quoted.sender);
    if (index !== -1) {
      banUser.splice(index, 1);
      // Save the updated ban list to the file
      fs.writeFileSync('./database/banChat.json', JSON.stringify(banUser));
      // Notify the user that they have been unbanned
      return m.reply('User Sucsessfully Unbanned');
    } else {
      // Notify the user that their WhatsApp ID was not found in the ban list
      return m.reply('Your WhatsApp ID was not found in the ban list.');
    }
  } else {
    // If there's no valid reply, inform the user to use /unban as a reply to another message
    return m.reply('Please reply to a message with /unban to unban user.');
  }
}
break;

case 'nsfw':
  if (isBan) return m.reply(replai.banned);	 			
  await doReact("🍑");
  m.reply(`
╭––『 *Anime (18+)* 』
┆❏.hentai 🅕
┆❏.neko 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thighs 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓
`);
break;

case 'emix': {
  if (isBan) return m.reply(replai.banned);	 	
await doReact("🍑");

let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
await client.sendMessage(m.chat, { image: { url: res.url }, caption: `Ye Le..` }, { quoted: m });

}
}
break;

case 'couplepp':
case 'cpp':
case 'couple': {
if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
  reply('wait...');

  let cppl = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');

  for (let i = 0; i < 1; i++) {  // the set of picures.
    let random = cppl[Math.floor(Math.random() * cppl.length)];

    // Sending the male picture
    await client.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m });

    // Sending the female picture
    await client.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m });
  }
}
break;

case 'play':
  if (isBan) return m.reply(replai.banned);	 	
            if (!text) return m.reply(`Use ${command} Noobda`); 
           //  let yts = require("secktor-pack"); 
             let search = await yts(text); 
             let anu = search.videos[0]; 
             let buttonMessage = { 
                 image: { 
                     url: anu.thumbnail, 
                 }, 
                 caption: ` 
 ╭───────────────◆ 
 │⿻ hello 
 │  *Youtube Player* ✨ 
 │⿻ *Title:* ${anu.title} 
 │⿻ *Duration:* ${anu.timestamp} 
 │⿻ *Viewers:* ${anu.views} 
 │⿻ *Uploaded:* ${anu.ago} 
 │⿻ *Author:* ${anu.author.name} 
 ╰────────────────◆ 
 ⦿ *Url* : ${anu.url} 
 `, 
                 
          //       headerType: 4, 
             }; 
             return client.sendMessage(m.chat, buttonMessage, { 
                 quoted: m, 
             }); 
  
break;
case 'song': 
 case 'play': 
 case 'ytmp3': 
 case 'music': 
 case 'audio': 
   if (isBan) return m.reply(replai.banned);	 	
   if (!text) throw `Use example ${prefix + command} man meri jan`; 
  
   let searchAudio = await yts(text); 
   if (!searchAudio.videos || searchAudio.videos.length === 0) { 
     throw 'No videos found for the given search query'; 
   } 
  
   let vidAudio = searchAudio.videos[Math.floor(Math.random() * searchAudio.videos.length)]; 
   if (!vidAudio) throw 'Video Not Found, Try Another Title'; 
   let { title: titleAudio, thumbnail: thumbnailAudio, timestamp: timestampAudio, views: viewsAudio, ago: agoAudio, url: urlAudio } = vidAudio; 
   let wmAudio = 'Audio downloaded by AZAN'; 
  
   let captvidAudio = ` 
 ┏━━━━━━━━━━━━━━━━━━━━┓ 
 ┃ Audio by AZAN 
 ┃ 📝 Title: ${titleAudio} 
 ┃ ⏳ Duration: ${timestampAudio} 
 ┃ 👁️ Views: ${viewsAudio} 
 ┃ 📅 Upload: ${agoAudio} 
 ┃ 🔗 Link: ${urlAudio} 
 ┗━━━━━━━━━━━━━━━━━━━━┛`; 
  
   client.sendMessage(m.chat, { image: { url: thumbnailAudio }, caption: captvidAudio }, { quoted: m }); 
  
   const audioStream = ytdl(urlAudio, { 
     filter: 'audioonly', 
     quality: 'highestaudio', 
   }); 
  
   const tmpDirAudio = os.tmpdir(); 
   const writableStreamAudio = fs.createWriteStream(`${tmpDirAudio}/${titleAudio}.mp3`); 
  
   await streamPipeline(audioStream, writableStreamAudio); 
  
   let thumbnailDataAudio; 
   try { 
     const thumbnailResponseAudio = await client.getFile(thumbnailAudio); 
     thumbnailDataAudio = thumbnailResponseAudio.data; 
   } catch (error) { 
     console.error('Error fetching thumbnail:', error); 
     thumbnailDataAudio = ''; 
   } 
 // const gito = `${tmpDirAudio}/${titleAudio}.mp3`;
 
   const docAudio = { 
     audio: { 
       url: `${tmpDirAudio}/${titleAudio}.mp3`, 
     }, 
     mimetype: 'audio/mp4', 
     fileName: `${titleAudio}`, 
    
   }; 
   
//  await client.sendMessage(m.chat, {document: gito,fileName:`${titleAudio}.mp3`,mimetype: 'audio/mp4',}, { quoted: m });
  await client.sendMessage(m.chat, docAudio, { quoted: m }); 
  
   fs.unlink(`${tmpDirAudio}/${titleAudio}.mp3`, (err) => { 
     if (err) { 
       console.error(`Failed to delete audio file: ${err}`); 
     } else { 
       console.log(`Deleted audio file: ${tmpDirAudio}/${titleAudio}.mp3`); 
     } 
   }); 
   break;

  case 'ytmp4': 
 case 'video': 
 case 'vid': 
   if (isBan) return m.reply(replai.banned);	 	
   if (!text) throw `Use example ${prefix + command} man meri jan`; 
  
   let searchVideo = await yts(text); 
   if (!searchVideo.videos || searchVideo.videos.length === 0) { 
     throw 'No videos found for the given search query'; 
   } 
  
   let vidVideo = searchVideo.videos[Math.floor(Math.random() * searchVideo.videos.length)]; 
   if (!vidVideo) throw 'Video Not Found, Try Another Title'; 
   let { title: titleVideo, thumbnail: thumbnailVideo, timestamp: timestampVideo, views: viewsVideo, ago: agoVideo, url: urlVideo } = vidVideo; 
   let wmVideo = 'video downloaded by AZAN'; 
  
   let captvidVideo = ` 
 ┏━━━━━━━━━━━━━━━━━━━━┓ 
 ┃ Video by AZAN 
 ┃ 📝 Title: ${titleVideo} 
 ┃ ⏳ Duration: ${timestampVideo} 
 ┃ 👁️ Views: ${viewsVideo} 
 ┃ 📅 Upload: ${agoVideo} 
 ┃ 🔗 Link: ${urlVideo} 
 ┗━━━━━━━━━━━━━━━━━━━━┛`; 
  
   client.sendMessage(m.chat, { image: { url: thumbnailVideo }, caption: captvidVideo }, { quoted: m }); 
  
   const videoStream = ytdl(urlVideo, { 
     filter: 'videoandaudio', 
     quality: 'highest', 
   }); 
  
   const tmpDirVideo = os.tmpdir(); 
   const writableStreamVideo = fs.createWriteStream(`${tmpDirVideo}/${titleVideo}.mp4`); 
  
   await streamPipeline(videoStream, writableStreamVideo); 
  
   let thumbnailDataVideo; 
   try { 
     const thumbnailResponseVideo = await client.getFile(thumbnailVideo); 
     thumbnailDataVideo = thumbnailResponseVideo.data; 
   } catch (error) { 
     console.error('Error fetching thumbnail:', error); 
     thumbnailDataVideo = ''; 
   } 
  
   const docVideo = { 
     video: { 
       url: `${tmpDirVideo}/${titleVideo}.mp4`, 
     }, 
     mimetype: 'video/mp4', 
     fileName: `${titleVideo}`, 
     contextInfo: { 
       externalAdReply: { 
         showAdAttribution: true, 
         mediaType: 2, 
         mediaUrl: urlVideo, 
         title: titleVideo, 
         body: wmVideo, 
         sourceUrl: urlVideo, 
         thumbnail: thumbnailDataVideo, 
       }, 
     }, 
   }; 
  
   await client.sendMessage(m.chat, docVideo, { quoted: m }); 
  
   fs.unlink(`${tmpDirVideo}/${titleVideo}.mp4`, (err) => { 
     if (err) { 
       console.error(`Failed to delete video file: ${err}`); 
     } else { 
       console.log(`Deleted video file: ${tmpDirVideo}/${titleVideo}.mp4`); 
     } 
   }); 
   break; 
  
case 'nowa': case 'find': case 'stalk': case 'stalknumber':{
if (isBan) return m.reply(replai.banned);	 	
client.sendMessage(from, { react: { text: "🫡" , key: m.key }})
  if (!args[0]) return m.reply(`Use command like: ${prefix} <number>xxx`)
  var inputnumber = args[0]
  if (!inputnumber.includes('x')) return m.reply('You didnot added x')
  m.reply(`Sʏɴᴄʜʀᴏɴɪᴢɪɴɢ Fᴏʀ Wʜᴀᴛꜱᴀᴘᴘ Aᴄᴄᴏᴜɴᴛ ɪɴ Gɪᴠᴇɴ Rᴀɴɢᴇ...`)
  m.reply(`Pʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴡʜɪʟᴇ ɪ ꜰᴇᴛᴄʜ ᴅᴇᴛᴀɪʟꜱ....`)
  function countInstances(string, word) {
  return string.split(word).length - 1;
  }
  var number0 = inputnumber.split('x')[0]
  var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
  var random_length = countInstances(inputnumber, 'x')
  var randomxx;
  if (random_length == 1) {
      randomxx = 10
  } else if (random_length == 2) {
      randomxx = 100
  } else if (random_length == 3) {
      randomxx = 1000
  }
  var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
  var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
  var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
  for (let i = 0; i < randomxx; i++) {
  var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  var status1 = nu[Math.floor(Math.random() * nu.length)]
  var status2 = nu[Math.floor(Math.random() * nu.length)]
  var status3 = nu[Math.floor(Math.random() * nu.length)]
  var dom4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
  rndm = `${status1}`
  } else if (random_length == 2) {
  rndm = `${status1}${status2}`
  } else if (random_length == 3) {
  rndm = `${status1}${status2}${status3}`
  } else if (random_length == 4) {
  rndm = `${status1}${status2}${status3}${dom4}`
  }
  var numri = await client.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
  var anuu = numri.length !== 0 ? numri : false
  try {
  try {
  var anu1 = await client.fetchStatus(numri[0].jid)
  } catch {
  var anu1 = '401'
  }
  if (anu1 == '401' || anu1.status.length == 0) {
  nobio += `wa.me/${numri[0].jid.split("@")[0]}\n`
  } else {
  nomerny += `🪄 *Number:* wa.me/${numri[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
  }
  } catch {
  nowhatsapp += `${number0}${i}${number1}\n`
  }
  }
  m.reply(`${nomerny}${nobio}${nowhatsapp}`)
  }
  break;

  
 case 'gdrive': 
   if (isBan) return m.reply(replai.banned);	 	
   if (!args[0]) throw ' Enter a Google Drive link'; 
   try { 
     let res = await fg.GDriveDl(args[0]); 
     await m.reply(` *Google Drive DL* ▢ *Number:* ${res.fileName} ▢ *Size:* ${res.fileSize} ▢ *type:* ${res.mimetype}`); 
     client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m }); 
   } catch { 
     m.reply('Error: Check the link or try another link'); 
   } 
   break;



case 'ping': {
  if (isBan) return m.reply(replai.banned);	 	
  const reactionMessage = {
    react: {
        text: "📍", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)

 // await loading();;  
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'Pinging...' }, {quoted: m});

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Respond Speed: ${new Date() - startTime} ms*`
        }
      }
    }, {});
  } 
break;
// Case for taking a screenshot of a web page
case 'ss':
case 'ssf':
case 'ssweb':
  if (isBan) return m.reply(replai.banned);	 	
  if (!args[0]) {
    m.reply(m.chat, '*[🔎] Give a URL*');
  } else {
    try {
      let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer();
     client.sendFile(m.chat, ss, 'error.png', args[0], m);
    } catch (e) {
      console.error(e);
      m.reply(m.chat, 'An error occurred while capturing the screenshot. Please check the URL.', m);
    }
  }
  break; // Case break statement for taking a screenshot of a web page

case 'runtime':
case 'alive': {
  if (isBan) return m.reply(replai.banned);	 	
  const reactionMessage = {
    react: {
        text: "🤨", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)
await loading();;
  await m.reply(uptimeMessage);
}
break;


  case 'bard': 

if (isBan) return m.reply(replai.banned);		

try {
  let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
  const { key } = thinkingMessage;

  const userInput = text; // Replace this with the actual user input
  const apiEndpoint = `https://matrix-api-service.up.railway.app/bard?query=${encodeURIComponent(userInput)}`;

  let response = await axios.get(apiEndpoint);
  let responseData = response.data;

  if (responseData.status === true) {
    const result = responseData.ans;
await typewriterEffect(result, key);

const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
  } else {
    console.log('API returned a non-successful status');
  }
} catch (error) {
  console.error(error);
}

      
    /*
   if (!text) throw `*Chat With Bard AI*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`;  
 const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
 const MODEL_NAME = "models/chat-bison-001"; 
 const API_KEY = "AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM"; 
  
 const clint = new DiscussServiceClient({ 
   authClient: new GoogleAuth().fromAPIKey(API_KEY), 
 }); 
  
 async function main() { 
   const result = await clint.generateMessage({ 
     model: MODEL_NAME, // Required. The model to use to generate the result. 
     temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result. 
     candidateCount: 1, // Optional. The number of candidate results to generate. 
     prompt: { 
       // optional, preamble context to prime responses 
       context: "Respond to all the question in good manner.", 
       // Optional. Examples for further fine-tuning of responses. 
  
       // Required. Alternating prompt/response messages. 
       messages: [{ content: text }], 
     }, 
  }); 
const textToSpeak = result[0].candidates[0].content;
const speechAPIURL = `https://matrix-anime-api-production.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

//await typewriterEffect(from, m, `${result[0].candidates[0].content}`);  
await client.sendMessage(m.chat, {
        audio: {
            url: speechAPIURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${speechAPIURL}.mp3`,
    }, {
        quoted: m,
    });
 /*   await client.relayMessage(m.chat, {
      protocolMessage: {
        key: thinking.key,
        type: 14,
        editedMessage: {
          conversation: result[0].candidates[0].content
        }
      }
    }, {});
  */
// } 
  
// main(); 
 
 break;


case 'setbio':{
   if (!isOnr) return m.reply(replai.botowner);
if (!text) return m.reply(`Example: ${prefix + command} Hello World`)
    await client.updateProfileStatus(text)
    m.reply(`Bio Sucsessfully changed 2 ${text}`)
    }
 break;
  
case 'setname':{
 if (!isOnr) return m.reply(replai.botowner);
if (!text) return m.reply(`Where is the name?\nExample: ${prefix + command} Goutam`)
    await client.updateProfileName(text)
    m.reply(`Bot Name Sucsessfully changed 2 ${text}`)
    }
break;



case 'say':
case 'tts':
case 'gtts': {
  if (isBan) return m.reply(replai.banned);	 	
  
   if ( m.quoted && m.quoted.text) {
      try {
       // let data = m.quoted.text;
const textToSpeak = m.quoted.text;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;
    // Send the audio message
  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
      } catch {
        return m.reply(` Sorry Sayed Kuch problme he.`);
      }
    } else if (text) {
     // let lang = text.slice(0, 2);
      try {
const textToSpeak = text;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
      } catch {
        return m.reply(` Sorry sayed koi problme he.`);
      }
    }
 //   const langCode = args[0]; // Language code provided by the user
   // const textToSpeak = args.slice(1).join(" "); // Get the text to speak

    // Validate the language code
//    if (!isValidLanguageCode(langCode)) {
 //       return m.reply('Invalid language code. Please provide a valid language code.');
  //  }

    // Generate the audio URL using the specified language code and text
  //  const audioUrl = googleTTS.getAudioUrl(textToSpeak, {
 //       lang: langCode,
     //   slow: false,
  //      host: "https://translate.google.com",
 //   });

}
break;


case 'yts':
case 'ytsearch': {
  if (isBan) return m.reply(replai.banned);	 	
    if (!args.join(" ")) {
        return client.sendMessage(from, `Example: -yts Heat waves`, m.id); // Fix message sending
    }

    const yts = require("youtube-yts");

    try {
        const search = await yts(args.join(" "));
        const text = args.join(" ");
        let teks = `**YouTube Search Results for: ${text}**\n\n`;

        if (search.all.length === 0) {
            teks += "No results found for the given search query.";
        } else {
            search.all.forEach((result, index) => {
                teks += `**Result No: ${index + 1}**\n\n` +
                    `**Title:** ${result.title}\n` +
                    `**Views:** ${result.views}\n` +
                    `**Duration:** ${result.timestamp}\n` +
                    `**Uploaded:** ${result.ago}\n` +
                    `**Author:** ${result.author.name}\n` +
                    `**URL:** ${result.url}\n\n`;
            });
        }

        // Send the results in a more readable format
        client.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, m);
    } catch (error) {
        console.error("Error searching YouTube:", error);
        client.sendMessage(from, "An error occurred while searching YouTube.");
    }}
    break;

case 'insta': case 'ig': {
if (isBan) return m.reply(replai.banned);	 	
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} world_reacode_egg`)


    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;
  
 case "img": 
   if (isBan) return m.reply(replai.banned);	 	
   await loading();
   if (!text) throw `*This command generates image from texts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
  
      const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${text}&model=art`;  
      const response = await fetch(endpoint);  
      const data = await response.json();  
  
      if (data.result && Array.isArray(data.result)) {  
        for (let i = 0; i < Math.min(data.result.length, 2); i++) {  
          const imageUrl = data.result[i];  
          const imageResponse = await fetch(imageUrl);  
          const imageBuffer = await imageResponse.buffer();  
          console.log(response); 
          await client.sendImage(from, imageBuffer, text, mek);  
        }  
      } else {  
        throw '*Image generation failed*';  
      }  
    } catch {  
      throw '*Oops! Something went wrong while generating images. Please try again later.*';  
    }  
  
 break;
  
case 'google': {
if (isBan) return m.reply(replai.banned);	 	
if (!q) return m.reply(`Example : ${prefix + command} ${global.BotName}`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break;


case 'github':
  if (isBan) return m.reply(replai.banned);	 	
    function isUrl(str) { 
 } 
  if (!text) {
  await doReact("❌");
  return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} MatrixCoder0101`)
} await doReact("🔎");
const username = text; 
// Axios GET request to fetch data from the API
axios
  .get(`https://api.github.com/users/${encodeURIComponent(username)}`)
  .then((response) => {
    const data = response.data;
   let github = `
 ╭━━━〔 *G I T H U B* 〕━━━┈⊷ 
  ◦ *Name:* ${data.name}
  ◦ *ID:* ${data.id}
  ◦ *Username:* ${data.login}
  ◦ *Follower:* ${data.followers}
  ◦ *Following:* ${data.following}
  ◦ *Public Repos:* ${data.public_repos}
  ◦ *Bio:* ${data.bio}
  ◦ *Profile:* ${data.html_url}
╰━━━━━━━━━━━━━━━━┈⊷`
client.sendMessage(m.chat, {image: { url: data.avatar_url }, caption: github }, {quoted: m})
 })
break;

  
function isUrl(str) { 
 } 
  
 
case 'git':
case 'gitclone':
            case 'git-clone':
              if (isBan) return m.reply(replai.banned);	 	
  if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/MatrixCoder0101/GSS-Botwa`);
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`);
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
  let [, user, repo] = args[0].match(regex1) || [];
  repo = repo.replace(/.git$/, '');
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`;

  // Use Axios to send a HEAD request and get the content-disposition header
  axios.head(gitUrl)
    .then(response => {
      let filename = response.headers['content-disposition'].match(/attachment; filename=(.*)/)[1];
      
      // Send the document using Axios
      axios({
        method: 'get',
        url: gitUrl,
        responseType: 'stream', // Set the response type to stream
      })
      .then(response => {
        // Handle the response data and send it as a document
        client.sendMessage(m.chat, {
          document: { url: gitUrl, data: response.data }, // Use response.data as the document data
          fileName: filename + '.zip',
          mimetype: 'application/zip'
        }, { quoted: m });
      })
      .catch(err => {
        console.error(err);
        reply(mess.error);
      });
    })
    .catch(err => {
      console.error(err);
      reply(mess.error);
    });
  break;

case 'bug': case 'request': case 'report': {
if (isBan) return m.reply(replai.banned);	 	
	if (!text) return m.reply(`Example : ${

        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break;
case 'short':
  if (isBan) return m.reply(replai.banned);	 	
if (!text) m.reply('*Please provide a URL or link to shorten.*'); 
axios.get(`https://tinyurl.com/api-create.php?url=${text}`).then(function(response) {
const deta = `*SHORT URL CREATED!!*\n\n*Original Link:*\n${text}\n*Shortened URL:*\n${response.data}`
m.reply(deta); 
})
  
break;
case 'weather':
  if (isBan) return m.reply(replai.banned);	 	
        client.sendMessage(from, { react: { text: "🌏", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        client.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

break;               
            
            
            
case "ai":
case "gpt":
  if (isBan) return m.reply(replai.banned);

  try {
    const userInput = text; // Replace this with the actual user input
    console.log('Received message:', userInput);

    let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
    const { key } = thinkingMessage;

    const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;
    let response = await axios.get(apiEndpoint);
    let responseData = response.data;

    if (responseData.result) {
      const result = responseData.result;
      await typewriterEffect(result, key);
const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
    } else {
      console.log('API returned an unexpected response:', responseData);
    }
  } catch (error) {
    console.error(error);
  }

  break;


/*
case "ai": case "gpt":   
if (isBan) return m.reply(replai.banned);		

try {
  let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
  const { key } = thinkingMessage;

  const userInput = text; // Replace this with the actual user input
  const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;

  let response = await axios.get(apiEndpoint);
  let responseData = response.data;

  if (responseData.status === true) {
    const result = responseData.result;
await typewriterEffect(result, key);

const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
  } else {
    console.log('API returned a non-successful status');
  }
} catch (error) {
  console.error(error);
}

      
 break; 
 */

case 'stable': {
  if (isBan) return m.reply(replai.banned);	 	
  if (!text) throw `*This command generates images from text*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`; 

  try {
    m.reply('*Please wait, generating images...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;

    // Use Axios to make the HTTP request
    axios.get(endpoint)
      .then(async (response) => {
        const data = response.data;

        if (data.result && Array.isArray(data.result) && data.result.length >= 3) {
          // Extract the first three URLs
          const [url1, url2, url3] = data.result.slice(0, 3);

          // Send the images one by one
          await client.sendMessage(m.chat, { image: { url: url1 }, caption: text }, { quoted: m });
          await client.sendMessage(m.chat, { image: { url: url2 }, caption: text }, { quoted: m });
          await client.sendMessage(m.chat, { image: { url: url3 }, caption: text }, { quoted: m });
        } else {
          throw '*Image generation failed*';
        }
      })
      .catch(() => {
        throw '*Oops! Something went wrong while generating images. Please try again later.*';
      });
  } catch {
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
}
break;


          case "dall": case "ai-img": case "image": case "dalle":  
            if (isBan) return m.reply(replai.banned);	 	
            if (!text) throw `*This command generates image with Dall-E*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
             const configuration = new Configuration({  
                apiKey: global.OpenAiAPI,  
              });  
              const openai = new OpenAIApi(configuration);  
              const response = await openai.createImage({  
                prompt: text,  
                n: 1,  
                size: "512x512",  
              });  
              //console.log(response.data.data[0].url)  
              client.sendImage(from, response.data.data[0].url, text, mek);  
              } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;
    
case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
     if (!isOnr) return m.reply(replai.botowner);
        if (!m.quoted) return reply('Please mention a message baka!');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await client.sendMessage(m.chat, { delete: key });
 //  } else {
   //   reply('You are not authorized to use this command.');
  //  }
    break;     
    
case 'promote': {
  if (isBan) return m.reply(replai.banned);	 	
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Promote the user in the group
    await client.groupParticipantsUpdate(from, [users], "promote")
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been promoted to admin.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while promoting the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        })};
    break;    
case 'demote': {
  if (isBan) return m.reply(replai.banned);	 	
    try {
        // Check if it's a group chat
        // Extract the user to be demoted (from mention or quoted message)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!users) {
            return reply(`*Usage*\n${prefix + command} @tag`);
        }

        // Demote the user in the group
        await client.groupParticipantsUpdate(from, [users], "demote");

        reply(`User ${users} has been demoted.`);
    } catch (error) {
        console.error("Error demoting user:", error);
        reply("An error occurred while demoting the user.");
    }}
    break;    
case 'block': {
  
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to block the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'block');
  } catch (error) {
    console.error("Error blocking user:", error);
    reply("An error occurred while blocking the user.");
  }}
  break;


case 'unblock': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to unblock the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'unblock');
  } catch (error) {
    console.error("Error unblocking user:", error);
    reply("An error occurred while unblocking the user.");
  }}
  break;    


case 'private': {
   if (!isOnr) return m.reply(replai.botowner);
        client.sendMessage(from, { react: { text: "🔐" , key: m.key }})
        client.public = false
        reply('mode changed in to private. only admin can use me!')
        client.setStatus(`Mode : Self`)
        }
        break;

case 'public': {
   if (!isOnr) return m.reply(replai.botowner);
        client.sendMessage(from, { react: { text: "🔓" , key: m.key }})
        client.public = true
        reply('mode changed in to public. now all user user me!')
        client.setStatus(`Mode : Public`)
        }
        break;
case 'kick': {
    // Check if it's a group chat
    // Extract the user to be kicked (from mention or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Kick the user from the group
    await client.groupParticipantsUpdate(from, [users], 'remove')
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been kicked from the group.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while kicking the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });
}
    break;


case 'add': {
  // Check if it's a group chat

  // Extract the user to be added (from mention, quoted message, or provided text)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!users) {
    return reply(`*Usage*\n${prefix + command} @tag`);
  }

  // Add the user to the group
  await client.groupParticipantsUpdate(from, [users], 'add')
    .then(() => {
      reply(`User ${users} has been added to the group.`);
    })
    .catch((err) => {
      console.error(err);
      reply('An error occurred while adding the user to the group.');
    });
}
  break;


case 'chat':
  if (isBan) return m.reply(replai.banned);	 	
            botreply = await axios.get(`http://api.brainshop.ai/get?bid=177717&key=uooLJDuf8KeXO1fv&uid=[uid]&msg=[${text}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          

            m.reply(txtChatbot);
break;            
            
            case "sc": case "script": case "scbot":  
            // m.reply("https://github.com/MatrixCoder0101/GSS-Botwa");  
    await loading();;;
             let api = 'https://api.github.com/repos/MatrixCoder0101/GSS-BETA'
  axios.get(api).then(function(response) {
    github = response.data;
    let txt = `                                                           *B O T  -  S C R I P T*\n\n` 
       txt += `◦  *Name* : *${github.name}*\n` 
       txt += `◦  *Visitor* : ${github.watchers_count}\n` 
       txt += `◦  *Size* : ${(github.size / 1024).toFixed(2)} MB\n` 
       txt += `◦  *Updated* : ${moment(github.updated_at).format('DD/MM/YY')}\n` 
       txt += `◦  *Url* : ${github.html_url}\n\n` 
       txt += `${github.forks_count} Forks · ${github.stargazers_count} Stars · ${github.open_issues_count} Issues\n\n` 
       txt +=               '*MatrixCoder0101*'
   client.relayMessage(m.chat,  { 
           requestPaymentMessage: { 
           currencyCodeIso4217: 'INR', 
           amount1000: "9999999999", 
           requestFrom: m.sender, 
           noteMessage: { 
           extendedTextMessage: { 
           text: txt, 
           contextInfo: { 
           externalAdReply: { 
           showAdAttribution: true
       }}}}}}, {}) 
    });
            break;
            

case 'ahegao':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ahegao.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ass':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ass.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'bdsm':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/bdsm.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'milf':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/milf.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'blowjob':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/blowjob.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cuckold':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cuckold.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cum':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cum.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'eba':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/eba.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ero':
  if (isBan) return m.reply(replai.banned);	 	
await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'femdom':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/femdom.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'foot':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/foot.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'gangbang':
  if (isBan) return m.reply(replai.banned);	 	
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gangbang.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'glasses':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/glasses.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'hentai':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/hentai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'jahy':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/jahy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'manga':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/manga.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'masturbation':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/masturbation.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai':
case 'neko':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai2':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko2.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'nsfwloli':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/nsfwloli.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'orgy':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/orgy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'panties':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/panties.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'pussy':
if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'tentacles':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/tentacles.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'thighs':
case 'trap':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/thighs.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'yuri':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/yuri.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'zettai':
  if (isBan) return m.reply(replai.banned);	 
await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/zattai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;

case 'gifblowjob':
  if (isBan) return m.reply(replai.banned);	 
await doReact("🍑");
await loading();
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'gifhentai':
  if (isBan) return m.reply(replai.banned);	 
await doReact("🍑");
await loading();
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gifs.json'))
var nsfwresultx = pickRandom(botwansfw)
    await client.sendMessage(m.chat,{video:nsfwresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;
case 'smug2':
  if (isBan) return m.reply(replai.banned);	 
			await doReact("🍑");
waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)

    let button1ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `Here it is...`,

    }     
          await client.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;


case 'foxgirl':
  if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
  client.sendMessage(from, { react: { text: "✨" , key: m.key }})     

		
waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)

 
    let button12ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `Awoooo...`,

    }     
          await client.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;   


case 'animenom' :
  if (isBan) return m.reply(replai.banned);	 
await doReact("🍑");
  waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)

let xx1button3Messages = {
 image: {url:waifudd.data.url},
 caption:  `Here it is...`,

}      
          await client.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                  return('Error!')
              })
break;


case 'waifu3':
  if (isBan) return m.reply(replai.banned);	 
		await doReact("🍑");
waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
    
    let button112ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `Here it is...`,

    }     
          await client.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;

  case 'crossplay': case 'crosplay': case 'cosplay':
    if (isBan) return m.reply(replai.banned);	 
  await doReact("🍑");
  const cosq = args[0]; // Language code provided by the user
  const numofq = args.slice(1).join(" "); // Get the text to speak

  for (let i = 0; i < cosq; i++) {  // the set of picures.
        client.sendMessage(m.chat, {
            image: {
                url: `https://fantox-cosplay-api.onrender.com/`,
            },
            caption: replai.le,
        }, {
            quoted: m,
        });
 }

  break;



case 'anime':
case 'girl':
case 'animegirl':
case 'sexy':
case 'sexygirl':
case 'sexyanime':
  if (isBan) return m.reply(replai.banned);	 
  const arg1 = args[0];
  const numImages = parseInt(args[args.length - 1]);
  
  if (!text) {
    const imageUrl = `https://matrix-api-service.up.railway.app/randomgirl`;
    await doReact("🍑");
    client.sendMessage(m.chat, {
      image: {
        url: imageUrl,
      },
      caption: replai.le,
    }, {
      quoted: m,
    });
  } else {
    for (let i = 0; i < numImages; i++) {
      const imageUrl = `https://matrix-api-service.up.railway.app/${arg1}`;
      await doReact("🍑");
      client.sendMessage(m.chat, {
        image: {
          url: imageUrl,
        },
        caption: replai.le,
      }, {
        quoted: m,
      });
    }
  }
break;


case 'waifu':
  await doReact("🍑");
// Make a GET request to the API endpoint
axios.get('https://matrix-api-service.up.railway.app/waifu') // Replace with your API URL
  .then(response => {
    const imageUrl = response.data.imageUrl;
     client.sendMessage(m.chat, {
        image: {
          url: imageUrl,
        },
        caption: replai.le,
      }, {
        quoted: m,
      });
    console.log('Image URL:', imageUrl);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
break;

case 'send':
case 'scam':
case 'fuck':
  if (isBan) return m.reply(replai.banned);
 await doReact("🍑");
  const [recipient, numMessages, ...message] = args.join(' ').split('.');
  const formattedMessage = message.join('.').trim();
  const parsedNumMessages = parseInt(numMessages);

  for (let i = 0; i < parsedNumMessages; i++) {
    client.sendMessage(`${recipient}@s.whatsapp.net`, {
      text: formattedMessage,
    });
  }

  const replyMessage = `${parsedNumMessages} message(s) successfully sent to ${recipient}`;
  client.sendMessage(m.chat, {
    text: replyMessage,
  }, {
    quoted: m,
  });
  await doReact("✅");
  break;

case 'push':
  if (isBan) return m.reply(replai.banned);

  const broadcastMessage = args.slice(1).join(' ');

  for (const user of pendaftar) {
    client.sendMessage(`${user}@s.whatsapp.net`, {
      text: broadcastMessage,
    });
  }

  client.sendMessage(m.chat, {
    text: `Broadcast message sent to all users.`,
  }, {
    quoted: m,
  });
  break;

case 'true':
case 'truecaller':

try {
  const installationId = 'a1i0Q--j71FxrF6-uYQJNpxOYZSWZ8iDA7PBYZFjTcprhANUBveyFev6u71dfVZf';
  const apiUrl = `https://matrix-api-service.up.railway.app/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

  let response = await axios.get(apiUrl);
  console.log(response);
  let json = response.data;

const { name, alternateName, addresses, email, countryDetails } = json;

let info = `╭––『 *Phone Detail* 』\n`;
info += `┆ ⚝ *Name:* ${name}\n`;

if (addresses && addresses.length > 0) {
  info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
  info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
  info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
  info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
}

info += `┆ ⚝ *Email:* ${email}\n`;
info += `╰–––––––––––––––༓\n`

if (countryDetails) {
  info += `╭––『 *countryDetails* 』\n`;
  info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
  info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
  info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
  info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
  info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
  info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
  info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
  info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
  info += `╰–––––––––––––––༓`;
}


      await client.sendMessage(m.chat, {
        text: info,
      }, {
        quoted: m,
      });

} catch (error) {
  console.error(error);
}
break;
/*
case 'send':
case 'scam':
case 'fuck':
  if (isBan) return m.reply(replai.banned);

  const [recipient, numMessages, ...message] = args.join(' ').split('.');
  const formattedMessage = message.join('.').trim();

  for (let i = 0; i < parseInt(numMessages); i++) {
    client.sendMessage(`${recipient}@s.whatsapp.net`, {
      text: formattedMessage,
    });
  }
  break;
*/


          default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
     } 
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });
