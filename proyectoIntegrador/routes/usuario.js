var express = require('express');
var router = express.Router();
const usuarioController = require("../controllers/usuarioController")

router.post("/register", usuarioController.create);
router.get("/register", usuarioController.register);
router.get('/profile', usuarioController.profile);
router.get("/login", usuarioController.login);
router.post("/login", usuarioController.processLogin);
router.get("/logout", usuarioController.logout);
router.get('/profile/:id', usuarioController.profilePublic);

module.exports = router;