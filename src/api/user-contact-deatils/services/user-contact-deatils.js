'use strict';

const { contactUsEmailTemplate } = require("./ContactUsEmail");

/**
 * userContactDeatils service
 */


module.exports = {
    async create(data) {
        const response = await strapi.entityService.create("api::user-contact-deatils.user-contact-deatils", {
            data,
        });
        strapi
            .service("api::user-contact-deatils.sendmail")
            .send(
                process.env.MYEMAIL,
                response?.userEmail,
                "Elevatize A Saas Agency | Thank You for Contacting Us",
                contactUsEmailTemplate(response)
            );
        return response;
    },
};
