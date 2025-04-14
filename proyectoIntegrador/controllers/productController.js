const data = require("../db/datos");

const productoController = {
    agregar: function (req, res) {
        res.render("product-add", { data });
    },

    detalle: function (req, res) {
        res.render("product", { data });
    },

    buscar: function (req, res) {
        res.render("product", { data });
    }
};

module.exports = productoController;