const data = require("../database/models");

const indexController = {
    productos : function (req,res) {
    res.render("index", {data})
    
}};

module.exports = indexController;