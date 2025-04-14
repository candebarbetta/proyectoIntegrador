var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/search', productController.buscar);


module.exports = router;