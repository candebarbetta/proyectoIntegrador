const db = require("../database/models");

const indexController = {
    productos: function (req, res) {
        db.Producto.findAll()
        .then(productos => {
            res.render("index", {
                data: {
                    productos: productos
                }
            });
        })
        .catch(error => {
            console.error("ERROR EN LA CONSULTA A PRODUCTOS:", error);
            res.send("Error al cargar productos");
        });
    }
};

module.exports = indexController;