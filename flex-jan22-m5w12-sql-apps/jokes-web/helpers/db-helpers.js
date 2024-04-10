const pg = require("pg");

const client = new pg.Client({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

client.connect()

module.exports = client