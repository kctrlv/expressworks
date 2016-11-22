var express = require('express')
var app = express()

var port = process.argv[2] || 3000
var crypto = require('crypto')

function sha1(id){
  return crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
}

app.put('/message/:id', function(req, res){
  res.end(sha1(req.params.id))
})
app.listen(port)
