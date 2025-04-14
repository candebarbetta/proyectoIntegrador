var express = require('express');
var router = express.Router();
const usuarioController = require("../controllers/usuarioController")

router.get("/register", usuarioController.register)

module.exports = router;