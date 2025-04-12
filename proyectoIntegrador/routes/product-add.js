var express = require('express');
var router = express.Router();
const productaddController = require("../controllers/product-addController");

router.get("/productAdd", productaddController.productadd);

module.exports =router ;

