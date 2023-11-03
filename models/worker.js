const { Sequelize, DataTypes } = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('worker', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};