const nodemailer = require('nodemailer');
const user = process.env.MYEMAIL
const pass = process.env.MYPASS
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user,
        pass
    }
});
transporter.verify(function (error, success) {
    if (error) {
    } else {
        console.log("Server is ready to take our messages");
    }
});

module.exports = {
    send: (from, to, subject, html) => {

        // Setup e-mail data.
        const options = {
            from: `Elevatize Team <${from}>`,
            to: [to],
            cc: ['elevatize.2024@gmail.com'],
            subject: subject,
            html: html,
        };
        // Return a promise of the function that sends the email.
        return transporter.sendMail(options, (err, info) => {
            if (err) return
            if (info) return
        })
    },
};