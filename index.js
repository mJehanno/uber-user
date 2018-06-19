const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./config/config-logger');

const userRoute = require('./src/routes/user-route');

const errorHandler = require('./src/middlewares/error-handler');
const startDb = require('./config/config-mongoose');

require('dotenv').config();

startDb();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoute);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Listening on ${port}`);
});
