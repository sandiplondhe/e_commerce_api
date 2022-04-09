module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define('Reviews', {
        message: {
            type: DataTypes.STRING,
            required: true,
        },
        product_id: {
            type: DataTypes.STRING,
            required: true,
        },
    });
    return review;
};
