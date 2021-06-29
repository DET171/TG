const { Command } = require('yuuko');
require('dotenv').config()
module.exports = new Command('translate', (message, args, context) => {
  if(!args.length) return message.channel.createMessage('The usage would be `' + process.env.PREFIX + 'translate <target language> <string>`.');
  const {Translate} = require('@google-cloud/translate').v2;

  // Creates a client
  const translate = new Translate();
  const texts = args.slice(0).join(0);

  async function translateText(text, target) {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${text[i]} => (${target}) ${translation}`);
    });
  }

  translateText(texts, args[0]).catch((e) => console.error(e));
});