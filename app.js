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

app.get("/posts", function(req, res) {
   var posts = [
       {title: "post 1", author: "Abir"},
       {title: "can you believe this", author: "Colt"},
       {title: "My adorable pet", author: "Susy"}
    ]; 
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening!");
});