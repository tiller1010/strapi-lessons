module.exports = ({ env }) => ({
  connection: {
    connector: 'bookshelf',
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
  },
});
