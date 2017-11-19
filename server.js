
// set up ==============================================
var express=require('express');
var app=express();      // create app with express
var mongoose=require('mongoose');   // mongoose for mongoDB
var morgan=require('morgan');  // log requests to the console
var bodyParser=require('body-parser');  // pull information from HTML POST
var methodOverride=require('method-override'); // simulate DELETE and PUT


// configuration ================================================

// app.use(express.static(__dirname+'/public')); // set the static files location
app.use(morgan('dev'));   // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));  // parse application with x-www-form-urlencoded
app.use(bodyParser.json());  // parse application with json
app.use(bodyParser.json({type:'application/vnd.api+json'})); // parse application/vnd.api+json as json


var database=require('./server/config/database');

mongoose.connect(database.url);


// routes =====================================
// require('./server/app/routes')(app);
require('./server/app/route_login')(app);

app.use(function(err, req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// listen to certain port ==============================
app.listen(8088);
console.log("app listening on port 8088");





