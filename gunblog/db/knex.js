var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[envirnoment];
var knex = require('/knex')(config);
module.exports = knex;
