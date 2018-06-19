const logger = require('../../config/config-logger');

function errorHandling(err, req, res, next) {
  logger.error(err);
  res.status(500).send();
}

module.exports = errorHandling;
