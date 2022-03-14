require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

//Incluye el enviar el archivo index.html con llamadas GET al "/"
app.use (express.static(path.join(__dirname, "form", "build")));
app.use (express.static(path.join(__dirname, "form-sent")));

app.use ("/form", bodyParser.urlencoded({extended: false}));

app.get ("/form-sent", function (req, res) {
    res.sendFile (path.join(__dirname, "form-sent", "index.html"));
});

app.post ("/form", function (req, res) {
    console.log (req.body);
    res.redirect("/form-sent");
});

app.listen (process.env.PORT, process.env.HOST);
