const contactUsEmailTemplate = (response) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Heebo:wght@100;200;300;400;500;600;700;800&family=Syne:wght@400;500;600;700&family=Yantramanav:wght@400;500;700&display=swap');

        body {
            font-family: "Syne", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #1b1b1b;
        }

        .container {
            max-width: 600px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            background-color: #ffffff;
            padding: 50px 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #5d62ee;
            font-size: 30px;
            
        }

        p {
            color: #1b1b1b;
            font-size: 20px;
            line-height: 1.6;
        }

        .logo {
            text-align: center;
            font-family: "Syne", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
            color: #5d62ee;
        }

        .social-links {
            margin-top: 10px;
            text-align: center;
        }

        .social-links a {
            display: inline-block;
            margin: 0 10px;
            text-decoration: none;
        }

        .social-icon {
            color: #5d62ee;
            display: flex;
            font-size: 14px;
            transition: background-color 0.3s ease-in-out;
            color: #5d62ee;
        }

        .social-icon:hover {
            color: #5d62ee;

        }

        .logo {
            text-align: center;
        }

        .logo h6 {
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1;
            letter-spacing: 2px;
            font-weight: 700;
            font-size: 25px;
            font-family: "Syne";
            color: #5d62ee;
        }

        .logo p {
            margin-top: 0;
            margin-bottom: 0;
            letter-spacing: 4px;
            line-height: 1;
            font-size: 10px;
            font-weight: 600;
            font-family: "Syne", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
            color: #5d62ee;
        }

        a {
            text-decoration: none;
            transition: color 0.2s ease-out;
            cursor: pointer;
        }

        a .gradient-text {
            background-position: right;
        }

        .gradient-text {
            
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 100%;
            background-position: right;
            transition: background-position 0.4s ease;
            background-clip:text;
            fill:transparent;
            -ms-text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
            -moz-text-fill-color: transparent;
            
        }

        .fbtn {
            border: 1px solid;
            font-family: "Syne", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
            font-size: 12px;
            line-height: 1.33em;
            letter-spacing: 0.2em;
            font-weight: 500;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            width: auto;
            margin: 0;
            text-decoration: none;
            border-radius: 0;
            outline: 0;
            padding: 10px 15px 10px 18px;
            cursor: pointer;
            border-image-slice: 1;
            border-image-source: linear-gradient(70deg, #57b8e0, #5762e2, #be8ec6);
            color: #fff;
            background: linear-gradient(45deg, #5cc3ee 0, #5d91ef 29%, #5e5ef0 50%, #947be1 73%, #ca97d2 100%);
            transition: color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out;
            margin-top: 30px;
            color: #000;
            background: transparent;
        }

        .fbtn:hover {
            color: #000;
            background: transparent;
        }

        .content {
            margin-top: 34px;
        }

        .content p {
            margin-top: 0;
            margin-bottom: 10px;
        }

        .footer {
            margin-top: 50px;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Replace the URL with your logo image -->

        <h1><span class="gradient-text">Thank You for Contacting Us!</span></h1>
        <div class="content">
            <p>Hi ${response.name},</p>
            <p>We appreciate your interest in our products/services. Our team is working diligently to review your
                inquiry,
                and <b> we will get back to you as soon as possible.</b></p>
            <p>In the meantime, feel free to explore our website for more information about what we offer.</p>
        </div>

        <a href="https://www.yourwebsite.com" class="fbtn">Visit Our Website</a>
        <div class="footer">


            <div class="g-logo logo">
                <a href="http://localhost:3000/">
                    <h6>
                        <span class="gradient-text">ELEVATIZE</span>
                    </h6>
                    <p>
                        <span class="gradient-text">A SaaS Agency</span>
                    </p>
                </a>
            </div>
            <div class="social-links">
                <!-- Replace the URLs with your actual social media profile URLs -->
                <a href="https://facebook.com" class="social-icon" target="_blank">FACEBOOK</a> |
                <a href="https://twitter.com" class="social-icon" target="_blank">TWITTER</a> |
                <a href="https://linkedin.com" class="social-icon" target="_blank">LINKEDIN</a> |
                <a href="https://instagram.com" class="social-icon" target="_blank">INSTAGRAM</a>
            </div>

        </div>
    </div>
</body>

</html>`

module.exports = { contactUsEmailTemplate }