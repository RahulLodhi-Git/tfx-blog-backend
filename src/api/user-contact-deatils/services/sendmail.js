const nodemailer = require('nodemailer');
const userEmail = process.env.MYEMAIL
const userPass = process.env.MYPASS
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    // host: 'localhost',
    host: '127.0.0.1',
    port: 25
});
transporter.verify(function (error, success) {
    if (error) {
        console.log('dfd', error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

module.exports = {
    send: (from, to, subject, html) => {

        // Setup e-mail data.
        const options = {
            from: from,
            to: 'rahul.lodhi5003@gmail.com',
            subject: subject,
            html: html,
        };
        // Return a promise of the function that sends the email.
        return transporter.sendMail(options, (err, info) => {
            if (err) console.log('sendmail erro', err)
            if (info) console.log('sendmail info', info)
        })
    },
};