module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com',
        },
        contact: DataTypes.STRING,
        password: DataTypes.STRING,
        is_admin: DataTypes.INTEGER,
        token: DataTypes.STRING,
    });
    return Users;
};
