var express = require('express');
var router = express.Router();

const authController = require('../controllers/authentication');

router.all('*', authController.auth);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
