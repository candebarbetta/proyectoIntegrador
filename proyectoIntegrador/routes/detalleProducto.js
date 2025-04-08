var express = require('express');
var router = express.Router();
const detalleProductoController = require('../controllers/detalleProductoController');

router.get('/detalle', detalleProductoController.detalle);

module.exports = router;