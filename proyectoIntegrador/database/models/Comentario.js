module.exports = (sequelize, dataTypes) => {
    let alias = 'Comentario';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        texto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
        deletedAt: dataTypes.DATE,
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        paranoid: true
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        });
    };

    return Comentario;
};