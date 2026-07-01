function makeid(num = 4) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}

// ===== EXPORT WITH BOT NAME =====
module.exports = { 
  makeid,
  BOT_NAME: '𝐍ɪɢʜᴛᴍᴀʀᴇ 𝐌ᴅ',
  OWNER: '𝐍īiפʜᴛᴍʌ̄ʀə: 金 - 乛 𝐑əʈiīɣə̲ᴅ'
};
