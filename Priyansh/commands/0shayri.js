const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayri",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Robin",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "shayri",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💅💔...𝘑𝘢𝘣 𝘑𝘪𝘪𝘴𝘔 𝘚𝘦 𝘙𝘶𝘩 𝘕𝘪𝘪𝘒𝘢𝘓 𝘚𝘢𝘬𝘛𝘪𝘪 𝘏𝘢𝘪𝘪 𝘛𝘰𝘩 𝘋𝘪𝘓 𝘚𝘦 𝘓𝘰𝘨 𝘒𝘺𝘜𝘯 𝘕𝘩𝘪𝘪..💚 " , "🌻💋 ...𝘜𝘴𝘩𝘌 𝘈𝘱𝘯𝘢 𝘒𝘦𝘩𝘯𝘦 𝘒𝘪 𝘉𝘢𝘥𝘪 𝘛𝘢𝘮𝘢𝘯𝘯𝘢 𝘛𝘩𝘪 𝘋𝘪𝘭 𝘔𝘦 𝘐𝘴 𝘚𝘦 𝘗𝘩𝘦𝘭𝘦 𝘒𝘪 𝘉𝘢𝘢𝘵 𝘓𝘢𝘣𝘰𝘯 𝘗𝘳 𝘈𝘢𝘛𝘵𝘪 𝘒𝘪 𝘞𝘰 𝘎𝘢𝘪𝘳 𝘎𝘰 𝘎𝘺𝘦  :))*♥️ " , "💅🌾 ...𝘕𝘢𝘥𝘢𝘢𝘯 𝘉𝘢𝘩𝘶𝘵 𝘏𝘢𝘪 𝘞𝘰 𝘑𝘢𝘪𝘴𝘦 𝘒𝘶𝘤𝘩 𝘚𝘢𝘮𝘻𝘩𝘵𝘪 𝘏𝘪 𝘕𝘢𝘩𝘪 𝘏𝘢𝘪 𝘚𝘩𝘪𝘯𝘦 𝘚𝘦 𝘓𝘢𝘨𝘢 𝘒𝘳 𝘗𝘶𝘤𝘩𝘵𝘪𝘪 𝘏𝘢𝘪 𝘒𝘪 𝘋𝘩𝘢𝘥𝘬𝘢𝘯𝘦 𝘐𝘵𝘯𝘪 𝘛𝘦𝘫 𝘒𝘺𝘶𝘯 𝘏𝘢𝘪 :))*😈 " , "🪴🌾...𝘐𝘯𝘵𝘦𝘻𝘢𝘢𝘳 𝘛𝘰𝘩 𝘏𝘶𝘮 𝘚𝘢𝘢𝘳ıı 𝘜𝘮𝘢𝘳 𝘒𝘢𝘳 𝘓𝘦𝘯𝘨𝘸 𝘉𝘶𝘴 𝘒𝘩𝘶𝘥𝘢 𝘒𝘳𝘸 𝘒ıı 𝘛𝘶 𝘉ə𝘸𝘢𝘧𝘢 𝘕𝘢 𝘕ıı𝘬𝘭𝘸 :))*❤" , "💦👅.. 𝘛𝘦𝘳𝘦 𝘑𝘶𝘭𝘧𝘰𝘯 𝘒𝘦 𝘚𝘢𝘢𝘺𝘦 𝘔𝘦 𝘒𝘶𝘤𝘩 𝘐𝘴 𝘒𝘢𝘥𝘢𝘳 𝘒𝘩𝘰 𝘑𝘢𝘶 𝘔𝘢𝘪𝘯 𝘛𝘶 𝘏𝘢𝘴𝘴𝘦 𝘔𝘦𝘳𝘦 𝘏𝘪𝘴𝘴𝘦 𝘒𝘪 𝘏𝘢𝘴𝘴𝘪𝘖𝘳 𝘛𝘦𝘳𝘦 𝘏𝘪𝘴𝘴𝘦 𝘒𝘦 𝘈𝘢𝘯𝘴𝘩𝘶 𝘙𝘰 𝘑𝘢𝘶𝘯 𝘔𝘢𝘪𝘯.🥳💦" , "💐😐...𝘉𝘢𝘩𝘶𝘵 𝘚𝘸𝘢𝘭 𝘒𝘳𝘵𝘪𝘪 𝘏𝘰 𝘛𝘶𝘮 𝘐𝘵𝘯𝘢 𝘗𝘺𝘢𝘳 𝘏𝘪 𝘒𝘢𝘳 𝘓𝘦𝘵𝘪 𝘛𝘰 𝘑𝘸𝘢𝘣 𝘔𝘪𝘭 𝘑𝘢𝘵𝘦 😈 " , "💦👅...𝘏𝘢𝘳 𝘉𝘢𝘢𝘵 𝘔𝘦 𝘛𝘦𝘳𝘪 𝘋𝘩𝘰𝘬𝘢 𝘛𝘩𝘢 𝘡𝘩𝘰𝘰𝘵𝘪 𝘛𝘩𝘪 𝘛𝘸𝘳𝘪 𝘏𝘢𝘳 𝘌𝘬 𝘈𝘥𝘥𝘢 𝘗𝘢𝘵𝘵𝘩𝘢𝘳 𝘒𝘪 𝘛𝘶 𝘈𝘪𝘴𝘪 𝘔𝘶𝘳𝘢𝘵 𝘛𝘩𝘪 𝘔𝘢𝘪𝘯 𝘚𝘮𝘻𝘩𝘢 𝘏𝘶𝘸𝘢 𝘵𝘩𝘢 𝘑𝘪𝘴𝘬𝘰 𝘒𝘩𝘶𝘥𝘢💔😌" , "💦___🎗𝘚𝘢𝘣 𝘚𝘸 𝘑𝘺𝘢𝘥𝘢 𝘔𝘶𝘴𝘬ı𝘭 𝘞𝘰 𝘓𝘢𝘮𝘩𝘢 𝘏𝘰𝘵𝘢𝘚𝘢𝘣 𝘚𝘢𝘣𝘏𝘢ı 𝘫𝘢𝘣 𝘏𝘶𝘮 :- 𝘍𝘢ı𝘴𝘭𝘢 𝘕𝘩ı 𝘒𝘳 𝘗𝘢𝘵𝘦 𝘒ı 𝘉𝘩𝘶𝘭 𝘑𝘢𝘺𝘦 𝘠𝘢 𝘪𝘯𝘵𝘻𝘢𝘳 𝘒𝘢𝘳𝘸 💔:💦 " , "(✿ ♥‿♥)...𝘚𝘢𝘩𝘢𝘢𝘳𝘦 𝘋𝘩𝘶𝘯𝘥𝘯𝘦 𝘒𝘪 𝘑𝘢𝘳𝘶𝘳𝘢𝘵 𝘕𝘩𝘪 𝘏𝘶𝘮𝘢𝘳𝘪 𝘏𝘶𝘮 𝘈𝘬𝘦𝘬𝘦 𝘏𝘪 𝘗𝘰𝘰𝘳𝘪  𝘔𝘦𝘧𝘪𝘭 𝘒𝘦 𝘉𝘳𝘢𝘣𝘢𝘳  𝘏𝘢𝘪 :))*♥️" , "💍👅...𝘒𝘢𝘳𝘦𝘦𝘉 𝘈𝘢𝘯𝘦 𝘒𝘪 𝘒𝘩𝘢𝘸𝘢𝘪𝘴 𝘛𝘰 𝘉𝘢𝘩𝘶𝘵 𝘛𝘩𝘪 𝘔𝘢𝘨𝘢𝘳 𝘒𝘢𝘳𝘪𝘣 𝘈𝘢𝘬𝘳 𝘗𝘵𝘈 𝘊𝘩𝘢𝘭𝘢 𝘒𝘪 𝘔𝘢𝘩𝘰𝘣𝘣𝘢𝘵 𝘛𝘰 𝘍𝘢𝘢𝘴𝘭𝘰 𝘔𝘦 𝘏𝘢𝘪🥺 " , "💔🍷..𝘞𝘦𝘴𝘸 𝘛𝘰𝘩 𝘛𝘩ıı𝘬 𝘏𝘶𝘯 𝘛𝘦𝘳𝘸 𝘉ı𝘤𝘩𝘢𝘥 𝘑𝘢𝘯𝘸 𝘒𝘸 𝘉𝘢𝘢𝘥 𝘉𝘩ıı 𝘉𝘶𝘴 𝘋ı𝘭 𝘒𝘢 𝘏ıı 𝘋𝘢𝘳 𝘏𝘢ıı 𝘒𝘢𝘩ı𝘯 𝘋𝘩𝘢𝘥𝘬𝘯𝘢 𝘕𝘢 𝘊𝘩𝘰𝘳 𝘋𝘸🙄 " , "🌾👅..𝘔𝘦𝘳ıı 𝘡ıı𝘯𝘥𝘢𝘨ı 𝘒𝘦 𝘏𝘢𝘳 𝘒𝘪𝘴𝘴𝘸 𝘔𝘦 𝘛𝘶𝘮𝘔𝘦𝘳ıı 𝘈𝘢𝘵𝘦 𝘏𝘰 𝘚𝘣𝘴𝘦 𝘔ı𝘭𝘵𝘦 𝘏𝘰 𝘗𝘢𝘳 𝘔𝘦𝘳𝘦 𝘏ı𝘴𝘴𝘸 𝘔𝘦 𝘒𝘺𝘶𝘯 𝘕𝘩ıı 𝘈𝘢𝘵𝘦 𝘏𝘰💍" , "🤟💋__𝘠𝘦 𝘚𝘰𝘹𝘩 𝘒𝘳 𝘜𝘴𝘬ıı 𝘏𝘢𝘳 𝘉𝘢𝘢𝘵 𝘒𝘰 𝘚𝘢𝘤𝘩 𝘔𝘢𝘢𝘯 𝘓𝘦𝘵𝘦 𝘛𝘩𝘦 𝘒ıı 𝘐𝘵𝘯𝘦 𝘒𝘩𝘶𝘣𝘴𝘶𝘳𝘢𝘵 𝘓𝘰𝘣 𝘡𝘩𝘰𝘰𝘵 𝘒𝘢ıı𝘴𝘦 𝘉𝘰𝘭 𝘚𝘬𝘵𝘦 𝘏𝘢ıı 🥺🌾" , "🍁😍__𝘚𝘶𝘯𝘢 𝘏𝘢ıı 𝘒ıı 𝘋𝘶𝘸𝘢 𝘒𝘢𝘣𝘰𝘰𝘭 𝘒𝘳𝘯𝘦 𝘒𝘢 𝘛𝘦𝘳𝘢 𝘌𝘬 𝘞𝘢𝘲𝘵 𝘏𝘰𝘵𝘵𝘢 𝘏𝘢ıı 𝘌-𝘒𝘩𝘶𝘥𝘢 𝘈𝘣 𝘛𝘶 𝘏ıı 𝘉𝘵𝘢 𝘔𝘢ıı𝘯𝘦 𝘜𝘴𝘩𝘦 𝘒ıı𝘴 𝘞𝘢𝘲𝘵 𝘕𝘩ıı 𝘔𝘢𝘯𝘨𝘢𝘢 🥺🥶" , "🍒🙊... 𝘒ıı𝘴 𝘛𝘢𝘳𝘩𝘢 𝘒𝘳𝘦 𝘒𝘩𝘶𝘥 𝘒𝘰 𝘛𝘦𝘳𝘸 𝘗𝘺𝘢𝘳 𝘒𝘦 𝘒𝘢𝘣ıı𝘭 𝘏𝘶𝘮... 𝘈𝘢𝘥𝘢𝘵𝘵𝘦 𝘉𝘢𝘥𝘭𝘵𝘸 𝘏𝘢ıı 𝘖𝘳 𝘛𝘶𝘮 𝘚𝘩𝘢𝘳𝘵 𝘉𝘢𝘥𝘢𝘭 𝘥𝘦𝘵𝘦 𝘏𝘰 😈 " , "🥺🍒__𝘞𝘰 𝘉𝘰𝘭𝘵ıı 𝘛𝘩ıı 𝘒ıı 𝘛𝘶𝘮𝘩𝘢𝘳𝘦 𝘗𝘺𝘢𝘳 𝘒𝘦 𝘓ıı𝘺𝘦 𝘔𝘢ıı𝘯 𝘈𝘱𝘯ıı 𝘑𝘢𝘢𝘯 𝘉𝘩ıı 𝘋𝘦 𝘋𝘶𝘯𝘎ıı 𝘖𝘳 𝘈𝘢𝘫 𝘝𝘩ıı 𝘉𝘰𝘭 𝘙𝘩ıı 𝘏𝘢ıı 𝘒ıı 𝘊𝘩𝘩𝘰𝘥 𝘔𝘶𝘫𝘦 𝘔𝘦𝘳ıı 𝘡ıı𝘯𝘥𝘢𝘨ı 𝘒𝘢 𝘚𝘸𝘢𝘭 𝘏𝘢ıı 🙊 " , "🙊😈_𝘏𝘶𝘮𝘯𝘦 𝘏𝘢𝘳 𝘉𝘢𝘢𝘳 𝘉𝘢𝘥𝘭𝘢 𝘏𝘢ıı 𝘒𝘩𝘶𝘥 𝘒𝘰 𝘚𝘩ıı𝘳𝘧 𝘜𝘯𝘬𝘦 𝘓ıı𝘠𝘦 𝘈𝘶𝘳 𝘈𝘣 𝘞𝘰 𝘒𝘩𝘢𝘵𝘸 𝘩𝘢ıı 𝘒ıı 𝘛𝘶𝘮 𝘗𝘩𝘭𝘦 𝘑𝘢ıı𝘴𝘦 𝘕𝘩ıı 𝘙𝘩𝘦 :💔 " , "🍷🍒__𝘛𝘶𝘮𝘩𝘦 𝘈𝘱𝘯𝘢 𝘒𝘢𝘩𝘯𝘦 𝘒ıı 𝘉𝘢𝘥𝘪 𝘛𝘢𝘮𝘮𝘯𝘢 𝘛𝘩ıı 𝘋𝘪𝘭 𝘔𝘦 𝘓𝘢𝘣𝘰𝘯 𝘛𝘢𝘬 𝘈𝘢𝘵𝘦 𝘈𝘢𝘵𝘦 𝘛𝘶𝘮 𝘎𝘢ıı𝘳 𝘏𝘰 𝘎𝘺𝘦 :))*💚 " , " 💅💋 ...𝘔𝘢ıı𝘯𝘦 𝘒𝘢𝘣𝘩ıı 𝘕𝘩ıı 𝘒𝘢𝘩𝘢 𝘒ıı 𝘛𝘶 𝘉𝘩ıı 𝘔𝘶𝘫𝘦 𝘉𝘦𝘱𝘢𝘯𝘩𝘢𝘢 𝘗𝘺𝘢𝘳 𝘒𝘢𝘳 𝘉𝘴 𝘐𝘵𝘯𝘪𝘪 𝘚𝘩ıı 𝘒𝘩𝘢𝘸𝘢ıı𝘴 𝘏𝘢ıı 𝘒ıı 𝘛𝘶 𝘔𝘶𝘫𝘦 𝘔𝘢𝘩𝘴𝘰𝘰𝘴 𝘛𝘰 𝘒𝘢𝘳 :))*💚" , "😈🙊...𝘛𝘶𝘮 𝘛𝘰 𝘒𝘩𝘢𝘵𝘸 𝘛𝘩𝘦 𝘒ıı 𝘏𝘢𝘳 𝘚𝘩𝘢𝘮 𝘛𝘦𝘳𝘸 𝘚𝘩𝘢𝘵 𝘎𝘶𝘫𝘢𝘳𝘦𝘪𝘯𝘨𝘸 𝘛𝘶𝘮 𝘉𝘢𝘥𝘢𝘭 𝘎𝘺𝘸 𝘏𝘰 𝘠𝘢𝘢 𝘛𝘦𝘳𝘸 𝘚𝘩𝘢𝘳 𝘔𝘦 𝘈𝘣 𝘚𝘩𝘢𝘮 𝘕𝘩ıı 𝘏𝘰𝘵𝘵ıı🍷🤟 " , "🍒🌾 ...𝘗𝘵𝘢 𝘕𝘩ıı 𝘒𝘢𝘣 𝘑𝘢𝘺𝘨ıı 𝘛𝘦𝘳ıı 𝘓𝘢𝘢𝘱𝘳𝘸𝘢𝘺ıı 𝘒ıı 𝘈𝘢𝘥𝘢𝘵 𝘒𝘶𝘤𝘩 𝘛𝘰𝘩 𝘚𝘮𝘣𝘩𝘢𝘭 𝘒𝘳 𝘙𝘢𝘬𝘩𝘵ıı 𝘗𝘢𝘨𝘭 𝘔𝘶𝘫𝘦 𝘉𝘩ıı 𝘒𝘩𝘰 𝘋ıı𝘺𝘈 🍎" , "🪴🌻 ...𝘒𝘺𝘜 𝘒𝘩𝘦𝘭𝘵𝘦 𝘏𝘰 𝘛𝘶𝘮 𝘏𝘶𝘮𝘚𝘩𝘦 𝘔𝘢𝘩𝘰𝘣𝘣𝘢𝘵 𝘒𝘢 𝘒𝘩𝘦𝘭 𝘉𝘢𝘢𝘵 𝘉𝘢𝘢𝘵 𝘗𝘦 𝘙𝘰𝘰𝘵𝘩 𝘛𝘶𝘮 𝘑𝘢𝘵𝘸 𝘏𝘰 𝘈𝘶𝘳 𝘛𝘰𝘰𝘵𝘩 𝘒𝘢𝘳 𝘉𝘪𝘬𝘩𝘢𝘳 𝘏𝘶𝘮 𝘑𝘢𝘵𝘦 𝘏𝘢ıı:💚 " ,  "💅🍷 ...𝘕𝘢𝘚𝘦𝘦𝘣 𝘚𝘸 𝘑𝘺𝘢𝘥𝘢 𝘉𝘩𝘢𝘳𝘰𝘴𝘩𝘢 𝘛𝘶𝘮 𝘗𝘸 𝘒ıı𝘠𝘢 𝘛𝘩𝘢 𝘍ıı𝘳 𝘉𝘩ıı 𝘕𝘢𝘚𝘦𝘦𝘣  𝘐𝘯𝘯𝘈 𝘕𝘩ıı 𝘉𝘢𝘥𝘓𝘢 𝘑ıı𝘛𝘯𝘈 𝘛𝘶𝘮 𝘉𝘢𝘥𝘢𝘓 𝘎𝘺𝘞.🍁 " , "बुरी 😈 #आदतें अगर 🕒 वक्त पर नहीं #बदली 🙇जाए तो वह आदतें 😠 आपका #वक्त ⏰ #बदल ⏳ देती हैं|" , "आपका #समय ⏰ #सीमित ⌛है, इसीलिए 🤨 इसे #किसी 🦹‍♂️️ और की #ज़िन्दगी 🙇जी कर #व्यर्थ 🧐मत करो।"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Shayri") == 0 || (event.body.indexOf("shayri") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }