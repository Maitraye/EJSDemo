var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1>Welcome to the homepage</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening!");
});