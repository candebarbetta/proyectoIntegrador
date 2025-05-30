const data = require("../database/models");
const Op = data.Sequelize.Op;

const productoController = {
  create: function (req, res) {
    if (req.session.userLogged === undefined) {
      return res.redirect('/usuario/login');
    }
    if (req.session.userLogged === null) {
      return res.redirect('/usuario/login');
    }
    res.render("product-add");
  },

  store: function (req, res) {
    if (req.session.userLogged === undefined) {
      return res.redirect('/usuario/login');
    }
    if (req.session.userLogged === null) {
      return res.redirect('/usuario/login');
    }

    let nuevoProducto = {
      nombre: req.body.nombre,
      descripcion_corta: req.body.descripcion_corta,
      imagen: req.body.imagen,
      usuario_id: req.session.userLogged.id
    };

    data.Producto.create(nuevoProducto)
      .then(function () {
        res.redirect('/');
      })
      .catch(function (err) {
        res.send("Error al crear el producto: " + err);
      });
  },

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
    .then(function (producto) {
      if (producto === null) {
        return res.send('Producto no encontrado');
      }
      res.render("product", { data: { productos: [producto] } });
    })
    .catch(function (error) {
      console.error(error);
      res.send('Error al cargar el producto');
    });
  },

  buscar: function (req, res) {
    let query = req.query.search;

    if (query === undefined) {
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
    .then(function (productos) {
      let mensaje = null;
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
    .catch(function (error) {
      res.send('Error en la búsqueda: ' + error);
    });
  }
};

module.exports = productoController;
