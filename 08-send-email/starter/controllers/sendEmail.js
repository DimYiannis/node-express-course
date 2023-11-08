const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.KEY,
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding addict" <codingaddict@gmail.com>',
    to: "bar@example.com",
    subject: "hello",
    html: " <h2>Sending emails with node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
