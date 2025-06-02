var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


router.get('/create', productController.create);
router.post('/store', productController.store);
router.post('/comentar/:id', productController.comentar);
router.get('/search', productController.buscar);
router.get('/:id', productController.detalle); // <--- esta debe ir al final


module.exports = router;