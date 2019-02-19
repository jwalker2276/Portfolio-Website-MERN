const nodemailer = require('nodemailer');

exports.contact = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const { email, name, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `Message from ${name}`,
    text: message,
    html: `<div classname='email' style="
      color: #4b4b4b;
      padding: 20px;
      font-family: sans-serif;
      font-size: 20px;">
      <h2>Message from ${name}.</h2>
      <p>${message}</p>
      </div>`
  };

  const info = await transporter.sendMail(mailOptions);

  res.json(info.status);
};
