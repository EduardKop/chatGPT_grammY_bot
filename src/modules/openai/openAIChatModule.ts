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