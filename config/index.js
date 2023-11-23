const { Pool } = require("pg");
const DB = require("./config");

const pool = new Pool({
  connectionString: process.env.DB_CONNECT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
