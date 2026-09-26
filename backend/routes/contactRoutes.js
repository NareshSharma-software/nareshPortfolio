import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(
  'RESEND API KEY:',
  process.env.RESEND_API_KEY ? 'Loaded' : 'NOT LOADED'
);

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

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
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

    if (error) {
      console.error('RESEND ERROR:', error);

      return res.status(500).json({
        message: error.message || 'Failed to send email',
      });
    }

    res.status(200).json({
      message: 'Message sent successfully',
    });

  } catch (error) {
    console.error('EMAIL ERROR:', error);

    res.status(500).json({
      message: error.message || 'Failed to send email',
    });
  }
});

export default router;