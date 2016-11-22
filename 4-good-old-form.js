var express = require('express')
var app = express()
var port = process.argv[2] || 3000
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''))
})

app.listen(port)
