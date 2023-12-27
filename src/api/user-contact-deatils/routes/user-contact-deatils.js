module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/user-contact-details',
      handler: 'user-contact-deatils.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
