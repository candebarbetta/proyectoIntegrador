var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


router.get("/productAdd", productController.agregar);
router.get('/search', productController.buscar);
router.get('/create', productController.create);
router.post('/store', productController.store);
router.post('/comentar/:id', productController.comentar);
router.get('/:id', productController.detalle);

module.exports = router;