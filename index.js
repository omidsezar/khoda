
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = '7979366534:AAG03Xqh7VABYt-s0cAUeuscXGnmVbFtLmc';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  // ارسال پیام کاربر به GPT سرور ما و دریافت پاسخ
  try {
    const response = await axios.post('https://khodabot-server.onrender.com/api/chat', {
      message: userMessage
    });

    const reply = response.data.reply || "متوجه نشدم، دوباره بپرس.";
    bot.sendMessage(chatId, reply);
  } catch (error) {
    bot.sendMessage(chatId, "خطا در ارتباط با هوش مصنوعی. لطفا بعدا امتحان کن.");
  }
});
