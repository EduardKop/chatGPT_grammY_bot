import {gpt_triggers_msg} from './triggers'
import {gpt_triggers_msg_Arr} from './triggers'
import { Context,Composer } from 'grammy';

interface MyContext extends Context { 
    session: { [key: string]: any };
  }

import OpenAI from 'openai';
require("dotenv").config();

const openai = new OpenAI({
  apiKey: `${process.env.OPEN_AI_TOKEN}`,
});
export const openAi = new Composer<MyContext>();

export const sessions: { [key: string]: Array<{ role: string; content: string }> } = {};

export async function handleChatMessage(message: any, chatId: any) {
    try {
        if (!(chatId in sessions)) {
            sessions[chatId] = [];
        }

        if (!(chatId in sessions)) {
        sessions[chatId] = [];
        }
    
    const trimmedMessage = message.trim(); // Видаляємо зайві пробіли з початку і кінця
    
    let matchedTrigger = '';
    gpt_triggers_msg_Arr.forEach((trigger) => {
        if (trimmedMessage.startsWith(trigger + ',') || trimmedMessage.startsWith(trigger + ' ') || trimmedMessage.includes(' ' + trigger + ' ')) {
        matchedTrigger = trigger;
        }
    });
  
        if (matchedTrigger) {
        const searchTerm = trimmedMessage.replace(new RegExp(`^${matchedTrigger}[ ,]*`, "i"), "");
        const userMessage: any = { role: 'user', content: searchTerm };
        const messages: any = [...sessions[chatId], userMessage];
        const completion = await openai.chat.completions.create({
            messages,
            model: "gpt-3.5-turbo",
            max_tokens: 300,
            temperature: 0.9
        });
    
        if (completion.choices[0]?.message?.content != null) {
        sessions[chatId].push({ role: 'assistant', content: completion.choices[0].message.content });
        return completion.choices[0].message.content;
        } 
        else {
        return "Assistant's reply was null or undefined.";
        }
    }

    
    } catch (error) {
    console.error("An error occurred:", error);
    return "Я дуже довго думаю і не можу обробити це, зачекай ще трохи, якщо не відповім - напиши в чат слово 'new' і спробуй знову";
}
}

openAi.hears(gpt_triggers_msg, async (ctx) => {
    try {
      const text:any  = ctx.msg.text
      const text2 = text.toLowerCase()
      const message = text2.replace(/,/g, '');
      gpt_triggers_msg_Arr.forEach((trigger)=>{
        if (message.startsWith(trigger)){
            ctx.reply('генерую відповідь...')
            
        }
      })
      
      await Promise.all(gpt_triggers_msg_Arr.map(async (trigger) => {
        if (message.startsWith(trigger)) {
            try{
                const chatId: any = ctx.chat.id;
                const replyMessage: any = await handleChatMessage(message, chatId);
                ctx.reply(replyMessage);
            }catch(err){
                await ctx.reply("Схоже GPT не працює 🤔 або мій баланс закінчився, Спробуй знову...");
            }
          
        }
      }));
     
    } catch (err) {
      console.error(err);
      ctx.reply('Не знайдено 😧 спробуйте ще раз');
    }
   
  });
  
openAi.hears(/new/, (ctx) => {
    const chatId = ctx.chat.id;
    sessions[chatId] = []; // Очищення сесії
    ctx.reply('Сесія з GPT очищена. Можете почати новий діалог :)');
  });
  