module.exports = ({ env }) => ({
  // defaultConnection: 'default',
  connection: {
    // default: {
      connector: 'bookshelf',
      // settings: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
      // },
      // options: {
        useNullAsDefault: true,
      // },
    // },
  },
});
