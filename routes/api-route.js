var db = require("../db/db.json");
var fs = require("fs");


module.exports = function (app) {
  // Set GET Requests and handles

  app.get("/api/notes", function (req, res) {
    // Return saved notes as JSON
    res.json(db);
  });

};