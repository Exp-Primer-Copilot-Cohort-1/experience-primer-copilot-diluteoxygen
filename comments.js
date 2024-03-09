// create web server
var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Path: comments.js
// create a route
app.get('/comments', function (req, res) {
  res.send('Hello World!');
});
