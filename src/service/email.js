const nodemailer = require('nodemailer');
const emailConfig = require('../config/config').email.development;

const transporter = nodemailer.createTransport({
  // service: emailConfig.service, // Specify the service for Gmail as SMTP Server
  host: '127.0.0.1',
  port: 25,
  secure: false,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
  tls: {
    rejectUnauthorized: false, // Accept self-signed certificates
  },
});

const mailOptions = {
  from: 'cineakers@gmail.com', // Sender address
  to: ["kanishkahuja.2874@gmail.com"],
  subject: 'Cineakers🎥🎬: Your Ultimate Movie Booking Platform! ', // Subject line
  html: 'Testing Email....',
};

const sendEmailThroughGmail = transporter.sendMail(
  mailOptions,
  (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.response);
  },
);

async () => {
  sendEmailThroughGmail();
};
module.exports = {
  sendEmailThroughGmail,
};
