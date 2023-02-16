//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
    //console.log(req);
    res.send("Hello");
});

app.get("/contact", function(req, res){
    res.send("Entre em contato por matheus.brasil@gmail.com")
});

app.get("/about", function(req, res){
    res.send("Me chamo matheus")
});

app.listen(3000, function() {
    console.log("porta 3000");
});

