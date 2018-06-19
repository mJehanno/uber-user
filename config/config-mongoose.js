const mongoose = require('mongoose');
const logger = require('./config-logger');

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PWD,
} = process.env;


function startDb() {
  mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PWD}@${MONGO_HOST}:${MONGO_PORT}`)
    .then(() => {
      logger.info('connected to mongo');
    }).catch((err) => {
      logger.error(err);
    });
}

module.exports = startDb;
