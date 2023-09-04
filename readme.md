# ChatGPT GrammY Telegram Bot



[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

I use Telegram's GrammY framework to simplify writing a bot and working with it as well as using TypeScript

## Usage


### Run Locally
- Clone this repo: `git clone git@github.com:EduardKop/chatGPT_bot.git`
- Install dependencies: `npm install`
- Install dependencies: `npm run dev`
- Create an .env file in the main folder and add the telegram key `BOT_TOKEN=Your key`
- Create an .env file in the openai folder and add the telegram key `OPEN_AI_TOKEN=Your key`
### Commands
- In order to communicate with chatGPT it is enough to write one of the words specified in the `triggers.ts file (modules/openai/triggers.ts)`. After the trigger word you can write your request 
- chatGPT in this implementation takes into account the context and will remember the history of correspondence, to clear the history and start a new dialog - enter the word `new` in the chat.






## Contributing

Contributions are welcome and encouraged! When contributing to this repository, please first discuss the change you wish to make via the [issues on Github](https://github.com/EduardKop/Airtable-Cloudflare-Worker-Proxy/issues).


## License
 
The MIT License (MIT)

Copyright (c) 2018 Portable CTO, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
