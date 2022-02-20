# 11.-Express.js-Challenge-Note-Taker

# SQL Employee Tracker

![JavaScript](https://img.shields.io/badge/JavaScript-65.9%20%25-yellow)

![HTML](https://img.shields.io/badge/HTML-23.2%20%25-orange)

![CSS](https://img.shields.io/badge/CSS-10.9%20%25-purple)

## Description

This project consisted on creating an application called Note Taker that can be used to write and save notes. Using Express.js back end and saving and retriving note data from a JSON file. This application will be deployed on Heroku.

## Table of Contents

* [Snippets](#snippets)
* [Technologies](#technologies)
* [Preview](#preview)
* [Links](#links)

## Snippets 

* **GET notes from database**
```            
router.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(db);
});
```   
* **GET Requests**
```           
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
```  
* **Delete note function**
```            
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
```           

## Technologies

* JavaScript
* Inquirer
* Express.js
* HTML
* CSS 

## Preview

This is an image of the note taker application on Heroku.  

![Note taker app](/public/assets/images/preview.png)

## Links

* [URL of the deployed App in Heroku](https://express-note-taker-analu.herokuapp.com/)

* [URL of the GitHub repository](https://github.com/analuciarojas/11.-Express.js-Challenge-Note-Taker)
