var express = require('express')
var app = express()
var fs = require('fs')

var port = process.argv[2] || 3000

// console.log(JSON.parse(fs.readFile(process.argv[3])))

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function (err, data) {
    if (err) throw err;
    var object = JSON.parse(data)
    res.json(object)
  });
})

app.listen(port)
