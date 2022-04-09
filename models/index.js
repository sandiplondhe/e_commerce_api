require('dotenv').config({ override: true });
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOSTNAME,
        dialect: process.env.DATABASE_DIALECT,
        logging: false,
        pool: { max: 5, min: 0, idle: 10000 },
    }
);
sequelize
    .authenticate()
    .then(() => console.log('Connected successfully'))
    .catch((err) => console.error(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize, DataTypes);
db.products = require('./products')(sequelize, DataTypes);
db.cart = require('./cart')(sequelize, DataTypes);
db.favourite = require('./favourite')(sequelize, DataTypes);
db.reviews = require('./reviews')(sequelize, DataTypes);

db.users.hasOne(db.products);
db.users.hasMany(db.reviews);
// db.reviews.belongsTo(db.users);

db.sequelize.sync().then(() => {
    console.log('Re-sync');
});

module.exports = db;
