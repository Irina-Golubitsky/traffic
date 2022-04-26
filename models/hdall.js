const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hdall extends Model { }

Hdall.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        y2017: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        y2018: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        y2019: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        y2020: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        y2021: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'hdall'
    }
);

module.exports = Hdall;