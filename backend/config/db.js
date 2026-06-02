require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "postgres-db",
  database: "ecommerce",
  password: "12345",
  port: 5432,
});

module.exports = pool;
