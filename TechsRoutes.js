const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/Techs", (req, res) => {
  try {
    db.all("SELECT * From Techs", (err, rows) => {
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

router.get("/Techs/:id", (req, res) => {
  const id = req.params.id;
  try {
    db.get("SELECT * From Techs WHERE id = ?", [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      if (row) {
        res.json(row);
      } else {
        res.status(404).json({ message: "Tech not found." });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// // id: number;
//   name: string;
//   pic: string;
//   skillLevel: number;

router.post("/Techs", (req, res) => {
  const { name, pic, skillLevel } = req.body;
  try {
    db.run(
      "INSERT INTO Techs (name, pic, skillLevel) VALUES (?, ?, ?)",
      [name, pic, skillLevel],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({ message: "Tech added.", id: this.lastID });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.put("/Techs/:id", (req, res) => {
  const id = req.params.id;
  const { name, pic, skillLevel } = req.body;
  try {
    db.run(
      "UPDATE Techs SET name = ?, pic = ?, skillLevel = ? WHERE id = ?",
      [name, pic, skillLevel, id],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        if (this.changes) {
          res.json({ message: "Tech updated." });
        } else {
          res.status(404).json({ message: "Tech not found." });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.delete("/Techs/:id", (req, res) => {
  const id = req.params.id;
  try {
    db.run("DELETE FROM Techs WHERE id = ?", [id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes) {
        res.json({ message: "Tech deleted." });
      } else {
        res.status(404).json({ message: "Tech not found." });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
