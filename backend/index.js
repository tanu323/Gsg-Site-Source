import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { firstname, lastname, email, company, businessPhone, message } = req.body;
    console.log("req.body is recieving: ", req.body)
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'contact.gogig@gmail.com',
            pass: 'ysyk wjpg qqlh jdbf',
        },
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'tanugbp@gmail.com',
        subject: "Contact Form Submission from",
        text: `
            You have received a new message from your website contact form:
            
            Name: ${firstname} ${lastname}
            Email: ${email}
            Company: ${company}
            Business Phone: ${businessPhone}
            Message: ${message}
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
