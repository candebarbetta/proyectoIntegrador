const data = require("../database/models");
const Op = data.Sequelize.Op;

const productoController = {
  agregar: function (req, res) {
    res.render("product-add");
  },

  detalle: function (req, res) {
    let id = req.params.id;

    data.Producto.findByPk(id, {
      include: [
        { association: 'usuario' },
        { association: 'comentarios' }
      ]
    })
    .then(function(producto) {
      if (!producto) {
        return res.send('Producto no encontrado');
      }
      res.render("product", { data: { productos: [producto] } });
    })
    .catch(function(error) {
      console.error(error);
      res.send('Error al cargar el producto');
    });
  },

  buscar: function (req, res) {
    let query = req.query.search;
    if (query == null) {
      query = "";
    }

    data.Producto.findAll({
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
        data: {
          productos: productos,
          query: query
        },
        mensaje: mensaje
      });
    })
    .catch(function(error) {
      res.send('Error en la búsqueda: ' + error);
    });
  }
};

module.exports = productoController;
