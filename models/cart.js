module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
        'Cart',
        {
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
        },
        {
            classMethods: {
                associate(models) {
                    Cart.belongsTo(models.user);
                    Cart.belongsTo(models.product);
                },
            },
        }
    );
    return Cart;
};
