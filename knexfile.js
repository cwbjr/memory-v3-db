// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///memory-v3'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
