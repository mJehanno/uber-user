const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./config/config-logger');

require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  logger.info(`Listening on ${port}`);
});
