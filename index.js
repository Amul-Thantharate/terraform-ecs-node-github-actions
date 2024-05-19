const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello World form Github Actions! 2nd time!");
});

app.listen(80);
