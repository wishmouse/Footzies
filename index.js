var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var app = express()
var cheerio = require('cheerio')
var server = require('http').createServer(app) // create the server
var mongodb = require('mongodb')
var fs = require('fs');

var port = process.env.PORT || 3030

var cons = require('consolidate')

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')


app.get('/', function(req, res){
  res.render("main")
})


app.listen(3030, function(){
  console.log("flash...ahaaaaa....on 3030")
})
