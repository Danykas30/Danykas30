const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
            auth: {
                user: process.env.EMAIL, // Use environment variables for security
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Configure the email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: 'parko20a@gmail.com', // Recipient email
            subject: `Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
