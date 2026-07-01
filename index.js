const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair'); 

// ===== BOT IDENTITY =====
const BOT_NAME = '𝐍ɪɢʜᴛᴍᴀʀᴇ 𝐌ᴅ';
const OWNER = '𝐍īiפʜᴛᴍʌ̄ʀə: 金 - 乛 𝐑əʈiīɣə̲ᴅ';

require('events').EventEmitter.defaultMaxListeners = 500;

// ===== LOAD PLUGIN SYSTEM =====
const pluginLoader = require('./plugins/loader');
(async () => {
    try {
        await pluginLoader.initialize();
        console.log('✅ Plugin system loaded successfully');
    } catch (err) {
        console.error('❌ Failed to load plugin system:', err);
    }
})();

app.use('/code', code);
app.use('/pair', async (req, res, next) => {
    res.sendFile(__path + '/pair.html')
});
app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/main.html')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║    🌙 𝐍ɪɢʜᴛᴍᴀʀᴇ 𝐌ᴅ v2.0.0         ║
║    👑 ${OWNER}      ║
║                                       ║
║    Server running on port: ${PORT}    ║
║                                       ║
╚═══════════════════════════════════════╝
    `)
});

module.exports = app;
