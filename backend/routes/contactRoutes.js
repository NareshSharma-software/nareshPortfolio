import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    } = req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        message: 'Please fill in all fields',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      message: 'Message sent successfully',
    });
  } catch (error) {
  console.error('EMAIL ERROR:', error);

  res.status(500).json({
    message: error.message,
  });
}
});

export default router;