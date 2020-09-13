var controllers = require('../controllers/cows-controller.js');
var router = require('express').Router();

router.get('/cows', controllers.get);

router.post('/cows', controllers.post);

module.exports = router;
