import Sequelize from 'sequelize';
import db from '../config/database.js'

const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    }
});

export default User;