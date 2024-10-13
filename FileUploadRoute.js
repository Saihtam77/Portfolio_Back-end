const express = require("express");
const router = express.Router();
const multer = require("multer");

// Techs

const techs_storage = multer.diskStorage({
  destination: "./uploads/Techs",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const techsUpload = multer({
  storage: techs_storage,
}).single("file");

router.post("/uploadTechs", (req, res) => {
  techsUpload(req, res, (err) => {
    if (err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
});

router.get("/getTechs/:filename", (req, res) => {
  res.sendFile(__dirname + `/uploads/Techs/${req.params.filename}`);
});

// Projects

const projects_storage = multer.diskStorage({
  destination: "./uploads/Projects",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const projectsUpload = multer({
  storage: projects_storage,
}).single("file");

router.post("/uploadProjects", (req, res) => {
  projectsUpload(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "File uploaded successfully" });
    }
  });
});

module.exports = router;
