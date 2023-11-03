const {Sequelize, DataTypes} = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('cars', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
        make_id: DataTypes.INTEGER,
        model: DataTypes.TEXT,
        year: DataTypes.INTEGER,
        vin: DataTypes.TEXT,
        color: DataTypes.TEXT,
        price: DataTypes.DOUBLE,
        city: DataTypes.TEXT,
        state: DataTypes.TEXT,
        postal: DataTypes.INTEGER,
        longitude: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        description: DataTypes.TEXT,
        seller: DataTypes.TEXT,
        seller_name: DataTypes.TEXT,
        image: DataTypes.TEXT,
        image_thumb: DataTypes.TEXT
    });
};
/*
create table cars
(
    id          integer not null
        primary key,
    make_id     text,
    model       text,
    year        integer,
    vin         text,
    color       text,
    price       double precision,
    city        text,
    state       text,
    postal      integer,
    longitude   double precision,
    latitude    double precision,
    description text,
    seller      text,
    seller_name text,
    image       text,
    image_thumb text
);
*/
