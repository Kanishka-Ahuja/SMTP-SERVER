require ("dotenv").config()
const simpleParser = require('mailparser').simpleParser;

module.exports = {
    environment : {
        active: "development",
        development: {
            port : process.env.PORT,
        },
        production: {
            port : 587,
        }
    },
    email : {
        development: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
            service: process.env.EMAIL_SERVICE
        }
    }
}