module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: {
            type: dataTypes.STRING(100)
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion_corta: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
        deletedAt: dataTypes.DATE,
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        paranoid: true
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "producto_id"
        });
    };

    return Producto;
};