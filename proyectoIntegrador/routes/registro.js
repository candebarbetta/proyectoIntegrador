var express = require('express');
var router = express.Router();
const registroController = require("../controllers/registroController")

router.get("/register", registroController.register)

module.exports = router;