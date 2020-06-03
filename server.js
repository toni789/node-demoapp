var express = require('express');

var app = express();

module.exports = app

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Demo app listening on port 3000!');
});
