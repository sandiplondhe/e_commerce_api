module.exports = (sequelize, DataTypes) => {
    const favourite = sequelize.define('Favourite', {
        product_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            required: true,
        },
        price: {
            type: DataTypes.INTEGER,
            required: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    });
    return favourite;
};
