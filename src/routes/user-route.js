const router = require('express').Router();
const userService = require('../services/user-service');
const logger = require('../../config/config-logger');

router
  .get('/', (req, res) => {
    userService.getUsers().then((users) => {
      res.send(users);
    }).catch((err) => {
      logger.error(err);
      res.status(400).send();
    });
  })
  .get('/:userId', (req, res) => {
    userService.getUserById(req.params.userId).then((user) => {
      res.send(user);
    }).catch((err) => {
      logger.error(err);
      res.status(400).send();
    });
  })
  .post('/', (req, res) => {
    userService.createUser(req.body).then(() => {
      res.send();
    }).catch((err) => {
      logger.error(err);
      res.status(400).send();
    });
  })
  .put('/:userId', (req, res) => {
    userService.updateUser(req.body).then(() => {
      res.send();
    }).catch((err) => {
      logger.error(err);
      res.status(400).send();
    });
  })
  .delete('/:userId', (req, res) => {
    userService.deleteUser(req.params.userId).then(() => {
      res.send();
    }).catch((err) => {
      logger.error(err);
      res.status(400).send();
    });
  });

module.exports = router;
