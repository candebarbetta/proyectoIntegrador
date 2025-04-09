var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/profile', profileController.info);

module.exports = router;