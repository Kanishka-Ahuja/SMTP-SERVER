const nodemailer = require('nodemailer');
const config = require('../config/config.js');
const enviornment = config.environment[config.environment.active];
const emailConfig = require('../config/config').email[config.environment.active];


const transporter = nodemailer.createTransport({
  service: emailConfig.service, // Specify the service for Gmail as SMTP Server
  host: enviornment.host,
  port: enviornment.port,
  secure: false,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
  tls: {
    rejectUnauthorized: false, // Accept self-signed certificates
  },
});

const sendEmailThroughGmail = (mailOptions) => transporter.sendMail(
  mailOptions,
  (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.response);
  },
);

// async () => {
//   sendEmailThroughGmail();
// };
module.exports = {
  sendEmailThroughGmail,
};
