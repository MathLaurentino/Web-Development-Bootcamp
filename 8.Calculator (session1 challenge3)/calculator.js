const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hellasdsaoo");
});

app.listen(3000, function() {
    console.log("porta 3000");
});
