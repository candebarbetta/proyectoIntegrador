const data = require("../database/models");

const productoController = {
  agregar: function (req, res) {
    res.render("product-add");
  },

  detalle: function (req, res) {
    res.render("product");
  },

  buscar: function (req, res) {
    res.render("product");
  },
};

module.exports = productoController;