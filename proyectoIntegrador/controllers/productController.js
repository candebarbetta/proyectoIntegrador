const data = require("../db/datos")

const detalleProductoController = {
    detalle : function (req,res) {
    res.render("product", {data})
    
}};

module.exports = detalleProductoController;