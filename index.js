const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// توکن ربات
const token = '7979366534:AAG03Xqh7VABYt-s0cAUeuscXGnmVbFtLmc';
const bot = new TelegramBot(token, { polling: true });

// هندل پیام‌ها
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  // ارسال درخواست به GPT
  try {
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        }
      }
    );

    const responseText = gptResponse.data.choices[0].message.content;
    bot.sendMessage(chatId, responseText);
  } catch (err) {
    bot.sendMessage(chatId, 'خطا در ارتباط با مغز مرکزی. لطفاً دوباره امتحان کن.');
  }
});
