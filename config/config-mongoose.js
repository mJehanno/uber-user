const mongoose = require('mongoose');
const logger = require('./config-logger');




function startDb(conf) {
  let connectionString = '';
  if (conf.MONGO_USERNAME !== '' && conf.MONGO_PWD !== '') {
    connectionString = `mongodb://${conf.MONGO_USERNAME}:${conf.MONGO_PWD}@${conf.MONGO_HOST}:${conf.MONGO_PORT}/users`;
  } else {
    connectionString = `mongodb://${conf.MONGO_HOST}:${conf.MONGO_PORT}/users`;
  }

  mongoose.connect(connectionString)
    .then(() => {
      logger.info('connected to mongo');
    }).catch((err) => {
      logger.error(err);
    });
}

module.exports = startDb;
