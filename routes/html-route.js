var path = require("path");
var fs = require("fs");

module.exports = function (app) {
  // Set GET Requests and handles

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};