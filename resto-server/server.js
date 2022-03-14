require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use ("/", express.static( path.join(__dirname, "client", "build") ) );

app.get ("/", function (req, res) {
    console.log ("hello?");
    res.sendFile (path.join (__dirname, "client", "build", "index.html") ); 
});

console.log ("hello");
app.listen (process.env.PORT, process.env.HOST);