const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js"); //local

// Config
    // Template Engine
        app.set('view engine', 'ejs');
    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    // Static Files
        app.use(express.static("public"));


//Global Vars

    let doList = ["Buy food", "Cook Food", "Eat Food"];
    let workItens = [];


// Rotas

    app.get("/", function(req, res){
        day = date.getDay();
        res.render('list', {listTitle: day, itens: doList});
    });

    app.post("/", function(req, res){
        let item = req.body.newItem;
        
        if (req.body.button == "Work List") {
            workItens.push(item);
            res.redirect("/work");
        } else {
            doList.push(item);
            res.redirect("/")
        }
    });


    app.get("/work", function(req, res){
        res.render("list", {listTitle: "Work List", itens: workItens});
    });

    
// Server
    app.listen(3000, function(){
        console.log("Rodando na porta 3000");
    });