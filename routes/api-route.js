var db = require("../db/db.json");
var fs = require("fs");


module.exports = function (app) {
  // Set GET Requests and handles

  app.get("/api/notes", function (req, res) {
    // Return saved notes as JSON
    res.json(db);
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};