const Sequelize = require('sequelize');
const db = require('../config/config').database.development

class Database {
    connection;
    constructor() {
        this.connection = new Sequelize(db.database, db.username, db.password, {
            host: db.host,
            dialect: db.dialect,
            port: db.port,
            logging: false,
            pool: {
                max: db.maxConnection,
                min: db.minConnection,
                acquire: db.acquireTimeout,
                idle: db.idleTimeout,
            },
            dialectOptions: {
                connectionTimeout: db.connectionTimeout,
            }
        })
    }

    connect = async () => {
        try {
            await this.connection.authenticate()
            console.log("Connected to Database")
        }
        catch (err) {
            console.log("Unable to connect to database" + err.message)
        }
    }
}

const database = new Database()
const sequelize = database.connection

module.exports = { database, sequelize }