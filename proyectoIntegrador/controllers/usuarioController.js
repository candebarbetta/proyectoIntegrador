const db = require("../database/models");
const bcrypt = require("bcryptjs");

const usuarioController = {
    register: function (req, res) {
        if (req.session.userLogged != undefined) {
            return res.redirect('/');
        }
        res.render("register");
    },

    create: function (req, res) {
        if (req.body.usuario == null) {
            return res.render("register", { error: "El nombre de usuario es obligatorio." });
        }
        if (req.body.usuario === "") {
            return res.render("register", { error: "El nombre de usuario es obligatorio." });
        }

        if (req.body.email == null) {
            return res.render("register", { error: "El email es obligatorio." });
        }
        if (req.body.email === "") {
            return res.render("register", { error: "El email es obligatorio." });
        }

        if (req.body.password == null) {
            return res.render("register", { error: "La contraseña es obligatoria." });
        }
        if (req.body.password === "") {
            return res.render("register", { error: "La contraseña es obligatoria." });
        }
        if (req.body.password.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
        }

        if (req.body.fechaNacimiento == null) {
            return res.render("register", { error: "La fecha de nacimiento es obligatoria." });
        }
        if (req.body.fechaNacimiento === "") {
            return res.render("register", { error: "La fecha de nacimiento es obligatoria." });
        }

        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (userExistente) {
                if (userExistente != null) {
                    return res.render("register", { error: "Este email ya está registrado." });
                }

                let documento = 0;

                if (req.body.documento != null) {
                    if (req.body.documento !== "") {
                        documento = req.body.documento;
                    }
                }

                db.Usuario.create({
                    email: req.body.email,
                    contrasena: bcrypt.hashSync(req.body.password, 10),
                    fechaNacimiento: req.body.fechaNacimiento,
                    documento: documento,
                    fotoPerfil: " ",
                })
                .then(function (nuevoUsuario) {
                    req.session.userLogged = nuevoUsuario;
                    return res.redirect("/usuario/profile");
                })
                .catch(function (error) {
                    return res.send("Ocurrió un error al crear el usuario.");
                });
            })
            .catch(function (error) {
                return res.send("Ocurrió un error al verificar el email.");
            });
    },

    login: function (req, res) {
        if (req.session.userLogged != undefined) {
            return res.redirect('/');
        }
        res.render("login");
    },

    processLogin: function (req, res) {
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (user) {
                if (user == null) {
                    return res.render("login", { error: "El email no está registrado" });
                }

                var passwordCorrecta = bcrypt.compareSync(req.body.password, user.contrasena);

                if (passwordCorrecta === false) {
                    return res.render("login", { error: "Contraseña incorrecta" });
                }

                req.session.userLogged = user;

                if (req.body.recordame != undefined) {
                    res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 60 * 24 * 30 });
                }

                return res.redirect('/');
            })
            .catch(function (error) {
                console.log("ERROR EN LOGIN:", error);
                return res.send("Ocurrió un error al intentar loguear.");
            });
    },

    profile: function (req, res) {
        if (req.session.userLogged == undefined) {
            return res.redirect('/usuario/login');
        }

        db.Producto.findAll({
            where: { usuario_id: req.session.userLogged.id }
        })
        .then(function (productos) {
            res.render("profile", {
                data: {
                    usuario: req.session.userLogged,
                    productos: productos
                }
            });
        })
        .catch(function (error) {
            console.log(error);
            res.send("Ocurrió un error al cargar el perfil");
        });
    },

    logout: function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy(function () {
            return res.redirect('/');
        });
    }
};

module.exports = usuarioController;
