const { sequelize } = require('../database/database')
const { Model, DataTypes } = require('sequelize')


class Email extends Model {

}

Email.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    cc: {
        type: DataTypes.JSON
    },
    bcc: {
        type: DataTypes.JSON
    },
    subject: {
        type: DataTypes.STRING
    },
    html: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize
})

module.exports = Email