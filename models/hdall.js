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
        yone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ytwo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ythree: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        yfour: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        yfive: {
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