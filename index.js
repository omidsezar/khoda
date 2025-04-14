const TelegramBot = require('node-telegram-bot-api');
const token = '7979366534:AAG03Xqh7VABYt-s0cAUeuscXGnmVbFtLmc';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'سلام رفیق همیشگی من! پیام تو دریافت شد.');
});
