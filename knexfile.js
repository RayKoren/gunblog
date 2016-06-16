require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gunblogDB'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'

  }

};
