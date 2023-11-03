const {Sequelize, DataTypes} = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('users', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
        full_name: DataTypes.TEXT,
        first_name: DataTypes.TEXT,
        last_name: DataTypes.TEXT,
        username: DataTypes.TEXT,
        avater: DataTypes.TEXT,
        email: DataTypes.TEXT,
        email_verified: DataTypes.BOOLEAN,
        phone: DataTypes.TEXT,
        twitter_handle: DataTypes.TEXT,
        bio: DataTypes.TEXT
    });
}
/*
create table users
(
    id             integer not null
        primary key,
    full_name      text,
    first_name     text,
    last_name      text,
    username       text,
    avatar         text,
    email          text,
    email_verified boolean,
    phone          text,
    twitter_handle text,
    bio            text
);
 */