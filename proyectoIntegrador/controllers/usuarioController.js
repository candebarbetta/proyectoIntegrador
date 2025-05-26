const data = require("../database/models");

const usuarioController = {
    login: function (req, res) {
        res.render("login");
    },

    register: function (req, res) {
        res.render("register");
    },

    profile: function (req, res) {
        res.render("profile", { data });
    }
};

module.exports = usuarioController;