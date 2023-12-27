'use strict';

/**
 * A set of functions called "actions" for `userContactDeatils`
 */

module.exports = {
  async create(ctx) {
    return await strapi
      .service("api::user-contact-deatils.user-contact-deatils")
      .create(ctx.request.body);
  }
};

