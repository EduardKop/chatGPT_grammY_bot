import { Bot, Context, GrammyError,HttpError } from "grammy";
import { ConversationFlavor } from "@grammyjs/conversations";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";





require("dotenv").config();


interface MainContext extends Context {
    session: { [key: string]: any }; 
  }
const bot = new Bot<ParseModeFlavor<MainContext & ConversationFlavor>>(`${process.env.BOT_TOKEN}`);



bot.command("start", (ctx) => ctx.reply("Hi"));

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});

bot.start();

