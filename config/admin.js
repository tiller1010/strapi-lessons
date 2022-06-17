module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a27e44021e7f44c6c93dc8551d3cf28'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'example-salt'),
  },
});
