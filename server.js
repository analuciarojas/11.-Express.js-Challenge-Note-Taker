// Set port 

const PORT = process.env.PORT || 3001;

// Set Dependencies 

const express = require('express');
const fs = require('fs');
const path = require('path');

// Route const

const apiRoute= require("./routes/api-route")
const htmlRoute= require("./routes/html-route")

// Set express app 
const app = express();

// Handling incoming data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// Require route files

app.use("/api",apiRoute);
app.use("/",htmlRoute);

// Set listener

app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}!`);
});

