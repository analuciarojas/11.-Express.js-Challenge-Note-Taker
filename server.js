// Set port 

const PORT = process.env.PORT || 3001;

// Set Dependencies 

const express = require('express');
const fs = require('fs');
const path = require('path');

// Set express app 
const app = express();

// Handling incoming data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Require route files

require("./routes/api-route")(app);
require("./routes/html-route")(app);


// Set listener

app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}!`);
});

