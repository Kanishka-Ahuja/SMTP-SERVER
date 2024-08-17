const express = require('express');
const server = express();
const emailConfig = require('./config/config').email.development;
const { sendEmailThroughGmail } = require('./service/email.js');

server.use(express.json());


server.get('/', (req, res) => {
  res.send("Working");
})

server.post('/mail', async (req, res) => {

  const { to, cc, bcc, subject, html } = req.body;

  const mailOptions = {
    from: emailConfig.user,
    to,
    cc,
    bcc,
    subject,
    html,
  };

  await sendEmailThroughGmail(mailOptions)

  res.send("Sent");

});

module.exports = server;
