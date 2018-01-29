const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const morgan = require('morgan')

// allows us to read POST data from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup logging so that we see requests to STOUT
// more info on log types here: https://github.com/expressjs/morgan
app.use(morgan('dev'))

// port we are listening on set here
var port = 3000;

// connects to the mongoDB
// currently this is just a dev DB run throuh mlab.com
// we only hae to connect to the DB here. Every other file
// that needs to connect to the DB will be enabled through this connection
var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:ropespw@ds117878.mlab.com:17878/ropes');

// register routes for API to the app
app.use('/', require('./gym/routes.js'))

// start the server
app.listen(port, function() {
  console.log("Listening on port: " + port)
})
