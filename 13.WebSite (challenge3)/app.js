//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const texto1 = "Lorem ipsum dolor sit amet. Qui amet vero vel nobis voluptas sed commodi perspiciatis non consequatur eius. Et unde alias nam sint deserunt et aspernatur quia nam dolor quis aut consequuntur nulla eos sint doloribus? Ut rerum similique et quisquam architecto quo corporis harum ut vero amet ea voluptas consequatur. Sed error architecto aut esse ducimus aut voluptas dicta? Id libero voluptatem quo eaque perspiciatis qui error facilis est consequuntur maxime qui voluptas porro. Rem maxime nesciunt eum molestiae praesentium et earum dolor. Sit odio neque nam voluptatem fuga cum impedit ipsam aut molestias quia et expedita quia! Vel labore adipisci et error facilis eum vitae doloribus ut cupiditate obcaecati ut quam deserunt est officiis voluptatibus non velit praesentium. Ut vitae nulla quo accusantium quasi et ducimus velit qui quas sint est eligendi deleniti. Eos laudantium illum id ipsa voluptatem aut veniam dolores et explicabo nisi eos earum omnis vel labore perferendis est velit praesentium." 

const app = express();


// Config
  // Template Engine
    app.set('view engine', 'ejs');
  // Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static("public"));


// Global Vars/Consts

  const posts = [{title: "Matheus", text: texto1}, {title: "Brasil Hexa", text: "2026"}];

// Rotas

  app.get("/", function(req, res){
    res.render("home", {home: homeStartingContent, data: posts});
  });


  app.get("/about", function(req, res){
    res.render("about", {about: aboutContent});
  });


  app.get("/contact", function(req, res){
    res.render("contact", {contact: contactContent});
  });


  app.get("/compose", function(req, res){
    res.render("compose");
  });


  app.get("/posts/:title", function(req, res){

    let title = _.lowerCase(req.params.title);

    posts.forEach(function(chave){
      if(_.lowerCase(chave.title) === title){
        res.render("post", {postArray: chave});
      } 
    });
    
  });

  app.post("/compose", function(req, res){
    let post = {
      title: req.body.title,
      text: req.body.text
    };
    posts.push(post);
    res.redirect("/");
  });


// Local Server
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
