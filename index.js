const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./config/config-logger');

const userRoute = require('./src/routes/user-route');

const errorHandler = require('./src/middlewares/error-handler');
const startDb = require('./config/config-mongoose');


const conf = {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PWD,
} = process.env;

require('dotenv').config();

startDb(conf);

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoute);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Listening on ${port}`);
});
