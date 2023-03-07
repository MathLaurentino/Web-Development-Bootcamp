
// inicializa o express
const express = require("express");
const app = express();

// Rotas
    app.get("/", function(req, res){
        res.send("Hello");
        // é possivel enviar arquivos por meio do sendFile(__dir + "name.html")
    });

    app.get("/contact", function(req, res){
        res.send("Entre em contato por matheus.brasil@gmail.com")
    });

    app.get("/about", function(req, res){
        res.send("Me chamo matheus")
    });

// Inicia o servidor na porta 3000
app.listen(3000, function() {
    console.log("porta 3000");
});

