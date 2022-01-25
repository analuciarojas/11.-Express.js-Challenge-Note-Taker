// Set port 

const PORT = process.env.PORT || 3001;

// Set Dependencies 

const express = require('express');
const fs = require('fs');
const path = require('path');

// Set express app 
const app = express();

// Require route files

const apiRoute = require('./routes/api-route');
const htmlRoute = require('./routes/html-route');

// Handling incoming data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

// Set listener

app.listen(PORT, () => {
    console.log("Now listening... ");
});

