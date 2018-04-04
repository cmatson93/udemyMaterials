var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log("APP IS RUNNING ON PORT " + 3000);
});

app.get('/', function(req, res) {
    res.send("HI THERE FROM EXPRESS");
})

app.get('/happy', function(req, res) {
    res.send(":)");
})