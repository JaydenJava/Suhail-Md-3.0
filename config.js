const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="jaydenkmb56@gmail.com"
global.location="Kampaka,Uganda."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Uganda";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,256xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,256xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256745944178,256xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_43_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzFOWlR2T3pHaExRZ29qVlpRM1VFampUL2ZGS0l3dzQ0K1IySm9iYS9BND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUHpTNG9wc3lRUkN0SHZ1NnJwWmFkd1wiLFxuICBcInBob25lSWRcIjogXCJjYTZlODIyYS0wNjBkLTQxOWMtYTU4Ni1lMzc4NWNmOTJlNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjEsXG4gICAgICA5NixcbiAgICAgIDEzLFxuICAgICAgMTA0LFxuICAgICAgMTM1LFxuICAgICAgMTUsXG4gICAgICAyNDYsXG4gICAgICAwLFxuICAgICAgMzksXG4gICAgICA3LFxuICAgICAgMTg3LFxuICAgICAgMTM0LFxuICAgICAgMzUsXG4gICAgICAyMjcsXG4gICAgICAyMTIsXG4gICAgICAxODQsXG4gICAgICAyMDMsXG4gICAgICA2MCxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgNzAsXG4gICAgICAxMDYsXG4gICAgICAxMzEsXG4gICAgICA0OSxcbiAgICAgIDEzOCxcbiAgICAgIDUxLFxuICAgICAgMjA4LFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMjE0LFxuICAgICAgNDAsXG4gICAgICA5LFxuICAgICAgNDgsXG4gICAgICAxMDAsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICAzNCxcbiAgICAgIDgsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZXh2NzhHRU9xc3NNRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldRUXh2QndNU3lNVy9ZT3B5YnRVWVllalNSRm9QdldRZ3dqYi84ZXpvRnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1ExY1ZJQUxXUGNHbGVyeWV3TW9ZN1MxNVpBWThZZTNmaVJpSFVyakJhVVM0b1dJbHArcENnbVoyOGJXc2FET1hLS0krMDN2VjJRazFlM29uenlBRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3puTXJrdkx4U2p6bG9COVhuKzVCek9OR3NLVmpDbFp5OU5tZU1nQlVEUUFyM2I3T3luTTZVRkt4enp2UGR2UTBRbldlRzlyTFhiQk1Ma2U4UVRxREE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDU5NDQxNzg6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4MjAwNjAyMDY2OTg1OjcxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQ1OTQ0MTc4OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzcxOTc5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhCdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1l5U0d5S1hSeDJYdjRIbXM4eU4rajdWT2pXdnVlZ3hzNGQzYUJOcGVjZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQzNzcxODQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc3MTg5MTgwNTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
