const data = require("../db/datos")

const searchController = {
    detalle : function (req,res) {
    res.render("product", {data})
    
}};

module.exports = searchController;