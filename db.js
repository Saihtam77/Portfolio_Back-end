const sqlite3 = require("sqlite3").verbose();

// SQLite database connection
const db = new sqlite3.Database("./Databases/database.db", (err) => {
    if (err) {
      console.error("Error connecting to the SQLite database:", err);
      return;
    }
    console.log("Connected to the SQLite database.");
  });

module.exports = db;