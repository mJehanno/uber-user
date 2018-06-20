const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://${process.env.AMQP_HOST}`);
