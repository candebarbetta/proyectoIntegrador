var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/profile', usuarioController.profile);

module.exports = router;