var db = require("../db/db.json");
var fs = require("fs");
const path = require('path');
const router = require("express").Router();

// Set get db info
router.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(db);
});

// POST request

router.post("/notes", (req, res) => {
// Note structure object
  let noteBase = {
    title: req.body.title,
    text: req.body.text,
    // Create random id number
    id: Math.floor(Math.random() * 10000),
  };
  console.log(noteBase);
  // Push note to database file
  db.push(noteBase);
  // Write updated array as db and Render
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.json(db);
});

// Delete request function 

router.delete("/notes/:id", function (req, res) {
  // Array for notes that will stay
  var notesSave = [];
  // For loop to keep notes with different ID that the one to erase
  
  for (var i = 0; i < db.length; i++) {
    if (db[i].id != req.params.id) {
      notesSave.push(db[i]);
    }
  }
  // Set db array to new saved notes
  db = notesSave;
  // Write updated array as db and Render
  fs.writeFileSync("./db/db.json",JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.json(db);
});

module.exports = router;


