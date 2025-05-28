const data = require("../database/models");
const Op = data.Sequelize.Op;

const productoController = {
  agregar: function (req, res) {
    res.render("product-add");
  },

  detalle: function (req, res) {
    res.render("product");
  },

  buscar: function (req, res) {
    let query = req.query.q;
    if (query == null) {
      query = "";
    }

    db.Producto.findAll({
      where: {
        nombre: {
          [Op.like]: '%' + query + '%'
        }
      },
      include: [
        { association: 'usuario' }
      ]
    })
    .then(function(productos) {
      var mensaje = null;
      if (productos.length === 0) {
        mensaje = "No hay resultados para su criterio de búsqueda";
      }

      res.render('search-results', {
        productos: productos,
        query: query,
        mensaje: mensaje
      });
    })
    .catch(function(error) {
      res.send('Error en la búsqueda: ' + error);
    });

  }
};

module.exports = productoController;