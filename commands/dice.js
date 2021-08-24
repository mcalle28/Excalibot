const utils = require('../utils');

module.exports={
  name: 'dice',
  description: 'rolls your dice',
  execute(message, args) {
    message.channel.send(utils.getRoll(args[0]));
  },
};