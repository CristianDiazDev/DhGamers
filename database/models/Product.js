module.exports = function (sequelize, DataTypes) {
    let alias = "Product"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        category: {
            type: DataTypes.STRING
        },
        bestSellers: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        },
        reviews: {
            type: DataTypes.INTEGER
        },
        deliveryDate: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        sliderImage: {
            type: DataTypes.STRING
        },
    }
    let config = {
        tableName: "products", //name of the table in DB
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)


return Product

}