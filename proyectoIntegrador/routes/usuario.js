var express = require('express');
var router = express.Router();
const usuarioController = require("../controllers/usuarioController")

router.get("/register", usuarioController.register);
router.get('/profile', usuarioController.profile);
router.get('/login', usuarioController.login);
router.get("/logout", usuarioController.logout);

module.exports = router;