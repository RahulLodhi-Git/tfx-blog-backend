'use strict';

const { contactUsEmailTemplate } = require("./ContactUsEmail");

/**
 * userContactDeatils service
 */

const toEmail = process.env.TO_EMAIL;
const welcome = process.env.WELCOME_EMAIL;
module.exports = {
    async create(data) {
        console.log('service--11', data)
        const response = await strapi.entityService.create("api::user-contact-deatils.user-contact-deatils", {
            data,
        });
        console.log('service--15', response)
        strapi
            .service("api::user-contact-deatils.sendmail")
            .send(
                welcome,
                toEmail,
                "Feboc A Saas Agency | Thank You for Contacting Us",
                contactUsEmailTemplate(response)
            );
        return response;
    },
};
