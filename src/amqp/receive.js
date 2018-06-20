const amqp = require('amqplib/callback_api');
const logger = require('../../config/config-logger');

amqp.connect(`amqp://${process.env.AMQP_HOST}`, (err, conn) => {
  conn.createChannel((error, chan) => {
    if (error) {
      logger.error(error);
    }

  });
});
