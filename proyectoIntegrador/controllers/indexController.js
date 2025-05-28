const db = require("../database/models");

const indexController = {
  productos: function (req, res) {
    db.Producto.findAll({
      include: [
        { association: 'usuario' }
      ]
    })
    .then(function (productos) {
      res.render("index", {
        data: {
          productos: productos,
        },
      });
    })
    .catch(function (error) {
      console.error("Error", error);
      res.send("Error al cargar productos");
    });
  },
};

module.exports = indexController;