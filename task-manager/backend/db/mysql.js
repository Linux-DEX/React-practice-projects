const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "username", // replace with your MySQL username
  password: "password", // replace with your MySQL password
  database: "task_manager",
});

module.exports = pool;
