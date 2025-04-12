const data = require("../db/datos")
const productaddController ={
    productadd : function (req,res) {
        res.render("product-add",{data})
        
    }
};

module.exports = productaddController;