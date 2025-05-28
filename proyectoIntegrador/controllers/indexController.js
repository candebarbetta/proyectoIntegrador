const db = require("../database/models");

const indexController = {
  productos: function (req, res) {
    db.Producto.findAll()
      .then(function (productos) {
        res.render("index", {
          data: {
            productos,
          },
        });
      })
      .catch(function (error) {
        console.error("ERROR EN LA CONSULTA A PRODUCTOS:", error);
        res.send("Error al cargar productos");
      });
  },
};

module.exports = indexController;