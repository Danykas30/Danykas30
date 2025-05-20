// /api/send-mail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: 'All fields are required.' });
    return;
  }

  // Configure transporter - use your real SMTP credentials (e.g., Gmail, Mailgun, etc.)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'process.env.EMAIL_USER',
      pass: 'process.env.EMAIL_PASS',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'parko20a@gmail.com',
      subject: `Contact Form Message from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
