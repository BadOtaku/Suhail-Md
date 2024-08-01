const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhVY0ZiMzRVNW5SRERJSjBFOCttTkxkWGJmWWlsMjN3NWVicllITXpMWTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVHb0tBRXRZUjJ5OENRa3BZcERwdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJjMTRmODctZDhhYy00MmIyLWI3ZWQtOTc3NWE2NjZiMDBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDY5LFxuICAgICAgNzQsXG4gICAgICAxMzgsXG4gICAgICAxNDAsXG4gICAgICA4MCxcbiAgICAgIDE0MCxcbiAgICAgIDE4LFxuICAgICAgMTI4LFxuICAgICAgMjM4LFxuICAgICAgNDgsXG4gICAgICAxMTIsXG4gICAgICAzMCxcbiAgICAgIDY1LFxuICAgICAgNTYsXG4gICAgICA3MyxcbiAgICAgIDIyNCxcbiAgICAgIDIsXG4gICAgICAxNTcsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDE4MixcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgMTkwLFxuICAgICAgMTI2LFxuICAgICAgNTYsXG4gICAgICAxMjEsXG4gICAgICAyMjcsXG4gICAgICAwLFxuICAgICAgMjA0LFxuICAgICAgNDYsXG4gICAgICAxNjQsXG4gICAgICAyMjUsXG4gICAgICAxNjMsXG4gICAgICAxNjcsXG4gICAgICAxMyxcbiAgICAgIDEwNixcbiAgICAgIDE4NSxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdTV0tGQVNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM4MTg0MDE2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQ4ODIxMzc2MDAxNzE6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dRdWF3R0VON05yYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzMkJPc3pBK0w4ekRsT0UyNUpuMmttTEZEbzR2RWJzYUNFd3lMVmtyMW1NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInAzU0ZZYzIrWld5T2dRTE5MNHN5aXgvaElaVEczU2dIY2VIL3hWd1cxZit4b0ppdUJDWmFYYkQrNUxRaWthWUwxRTNuRVVGMFhtdG8zKytzeVFMeURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjcrRkt6Qm94WjFmNVU5WUU0STI5ck5QRnphQ0hGUTFZUVQxS255ekxPSDlQOFdZRlRFN1M4RnVoaExrWWtwaDVvNEl0aTBQcTVsdUtnT2dGSnp5VURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzgxODQwMTY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwOTAzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNwb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3BvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK3Q1bnZxUi83OVJJVlBRKzlPSUhGRXlUUlFWNjNCNFkzRXM1K1V0MUJIUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzAzODIzNDU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MDkwMzYzNzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dushane",
  packname: process.env.PACK_NAME || "Dushane",
  botname : process.env.BOT_NAME  || "Dushane-bot",
  ownername:process.env.OWNER_NAME|| "Dushane",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
