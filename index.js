// Import the pg library
const { Client } = require("pg");
require("dotenv").config();

const connectionString = process.env.DB_URL;

const client = new Client({
  connectionString: connectionString,
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to the database");
  }
});

// Run a simple query (Example: Fetching the current date and time from PostgreSQL)
client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }
});
