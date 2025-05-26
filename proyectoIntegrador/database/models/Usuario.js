module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        },
        documento: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        fotoPerfil: {
            type: dataTypes.STRING(100)
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
        deletedAt: dataTypes.DATE
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        paranoid: true
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        });
    };

    return Usuario;
};