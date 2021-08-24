const utils = require('../utils');

module.exports={
  name: 'quote',
  description: 'Sends a random quote',
  execute(message, args) {
    utils.getQuote().then(quote=>message.channel.send(quote));
  },
};
  