require("dotenv").config()

module.exports = {
    environment: {
        active: "development",
        development: {
            port: process.env.PORT,
        },
        production: {
            port: 587,
        }
    },
    email: {
        development: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
            service: process.env.EMAIL_SERVICE
        }
    },
    database: {
        development: {
            database: process.env.DB_NAME,
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: "mariadb",
            port: Number(process.env.DB_PORT),
            maxConnection: Number(process.env.DB_MAX_CONNECTION),
            minConnection: Number(process.env.DB_MIN_CONNECTION),
            acquireTimeout: Number(process.env.DB_ACQUIRE_TIMEOUT),
            idleTimeout: Number(process.env.DB_IDLE_TIMEOUT),
            connectionTimeout: Number(process.env.DB_CONNECTION_TIMEOUT)
        }
    }
}