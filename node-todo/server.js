var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./models');

var PORT = process.env.PORT || 3000

var app = express();

// var routes = require('./routes');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var routes = require('./routes/api.js');
// app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapi";

mongoose.connect('mongodb://localhost/todoapi');
mongoose.Promise = Promise;

app.listen(PORT, function() {
    console.log("APP IS RUNNING ON PORT " + PORT);
});

app.get("/api-todo", function(req, res) {
    console.log("getting");
    db.Todo
        .find({})
        .then(function(dbTodo) {
            console.log(dbTodo);
            res.json(dbTodo);
        })
        .catch(function(err) {
            res.json(err);
        })
});

app.post("/api-todo", function(req, res) {
    console.log(req.body);
    db.Todo
        .create(req.body)
        .then(function(dbTodo) {
            res.json(dbTodo);
        })
        .catch(function(err) {
            res.json(err);
        })
})