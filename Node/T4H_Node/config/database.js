import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const db = new Sequelize('TFH', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
});

export default db;