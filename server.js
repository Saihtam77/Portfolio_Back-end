const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// SQLite database connection
const db = new sqlite3.Database('./Databases/database.db', (err) => {
  if (err) {
    console.error('Error connecting to the SQLite database:', err);
    return;
  }
  console.log('Connected to the SQLite database.');
});

// Routes
app.get('/api/data', (req, res) => {
  db.all('SELECT * From projects', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  db.run('INSERT INTO your_table (name) VALUES (?)', [data.name], function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: this.lastID });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});