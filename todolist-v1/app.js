const express = require('express');
const app = express();

const bodyParser = require('body-parser');

var itens = ["Buy food", "Cook Food", "Eat Food"];

// Config
    // Template Engine
        app.set('view engine', 'ejs');
    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas

    app.get("/", function(req, res){

        var today = new Date();
        var currentDay = today.getDay();
        var day = "";

        // if (currentDay === 6 || currentDay === 0) {
        //     day = "weekend";
        // } else {
        //     day = "week";
        // }

        var options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        }

        var day = today.toLocaleDateString("en-US", options);

        res.render('list', {kinfOfDay: day, itens: itens});

    });

    app.post("/", function(req, res){
        var item = req.body.newItem;
        itens.push(item);
        res.redirect("/")
    });



// Server
    app.listen(3000, function(){
        console.log("Rodando na porta 3000");
    });