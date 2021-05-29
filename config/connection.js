const Sequelize = require('sequelize');
require('dotenv').config();

sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3000
    }
);
module.exports = sequelize;