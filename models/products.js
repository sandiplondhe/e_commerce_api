module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        name: {
            type: DataTypes.STRING,
            required: true,
        },
        price: {
            type: DataTypes.INTEGER,
            required: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING, 
            required: true,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        count: {
            type: DataTypes.INTEGER,
        },
    });
    return Products;
};
