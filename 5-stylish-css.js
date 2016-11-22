var express = require('express')
var app = express()
var port = process.argv[2] || 3000
var path = require('path')
var public_path = process.argv[3] || path.join(__dirname, 'public')
var stylus = require('stylus')

app.use(stylus.middleware(public_path))

app.listen(port)
