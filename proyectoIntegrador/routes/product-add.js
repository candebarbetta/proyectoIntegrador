var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/productAdd", productController.agregar);

module.exports =router ;

