const data = require("../db/datos")

const indexController = {
    productos : function (req,res) {
    res.render("index", {data})
    
}};

module.exports = indexController;