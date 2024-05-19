const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello World form Github Actions!");
});

app.listen(80);
