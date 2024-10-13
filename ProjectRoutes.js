const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/Projects", (req, res) => {
  try {
    db.all("SELECT * From projects", (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/Projects/:id", (req, res) => {
  const id = req.params.id;
  try {
    db.get("SELECT * From projects WHERE id = ?", [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      if (row) {
        res.json(row);
      } else {
        res.status(404).json({ message: "Project not found." });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/Projects", (req, res) => {
  const project = req.body;
  try {
    db.run(
      "INSERT INTO projects (name, startDate, link, pic1, pic2, desc, intro) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        project.name,
        project.startDate,
        project.link,
        project.pic1,
        project.pic2,
        project.desc,
        project.intro,
      ],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, ...project });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.put("/Projects/:id", (req, res) => {
  const id = req.params.id;
  const project = req.body;
  try {
    db.run(
      `UPDATE projects SET 
        name = ?,
        startDate = ?,
        link = ?,
        pic1 = ?,
        pic2 = ?,
        desc = ?,
        intro = ?
        WHERE id = ?`,
      [
        project.name,
        project.startDate,
        project.link,
        project.pic1,
        project.pic2,
        project.desc,
        project.intro,
        id,
      ],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, ...project });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.delete("/Projects/:id", (req, res) => {
  const id = req.params.id;
  try {
    db.run("DELETE FROM projects WHERE id = ?", id, function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      res.json({ deleted: this.changes });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
