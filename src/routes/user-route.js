const router = require('express').Router();

router
  .get('/', (req, res) => {
    res.send();
  })
  .get('/:userId', (req, res) => {
    res.send();
  })
  .post('/', (req, res) => {
    res.send();
  })
  .put('/:userId', (req, res) => {
    res.send();
  })
  .delete('/:userId', (req, res) => {
    res.send();
  });

module.exports = router;
