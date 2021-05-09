module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://secure-peak-81279.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '010771099ca4930ddc50f6b6091f8755'),
    },
  },
});
