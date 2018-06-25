const { Client } = require('pg');
const config = require('./config');

const db = new Client({
  connectionString: config.connectionString
})
db.connect();

module.exports = db;
