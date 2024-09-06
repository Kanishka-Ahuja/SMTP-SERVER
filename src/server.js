const express = require('express');
const server = express();
const emailConfig = require('./config/config').email.development;
const { sendEmailThroughGmail } = require('./service/email.js');
const { sendFailureResp, sendSuccessResp } = require('./utils/response.js')
const Email = require("./model/model")

server.use(express.json());


server.get('/', (req, res) => {
  res.send("Working");
})

server.post('/mail', async (req, res) => {

  try {

    const { to, cc, bcc, subject, html } = req.body;

    const mailOptions = {
      from: emailConfig.user,
      to,
      cc,
      bcc,
      subject,
      html,
    };

    if (!to && !cc && !bcc) {
      throw new Error("Recipients are missing")
    }

    const info = await sendEmailThroughGmail(mailOptions)

    if (!info.response.includes('OK')) {
      throw new Error("Unable to send Email")
    }

    await Email.create({
      ...mailOptions
    })
    return sendSuccessResp(res, {
      status: 200,
      message: "Email sent Successfully"
    })
  }
  catch (err) {
    const statusCode = err.name == 'Error' ? 400 : 500
    return sendFailureResp(res, {
      status: statusCode,
      message: err.message
    })
  }

});

module.exports = server;
