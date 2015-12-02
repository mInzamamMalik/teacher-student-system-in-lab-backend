/**
 * Created by sayla on 2/12/2015.
 */
var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var admin = {username : "admin", password : "password"};

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', function(req , res) {

    /*var name = req.body.name;
    var email = req.body.email;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    res.json(req.body);*/
    res.redirect("  /home");
});

//app.get("/login/:email/:password",function(req,res){
//    console.log(req.params.email.toString());
//
//});




app.listen(port ,function(){
    console.log("listening at: " + port)
});