process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Trace paths to configuration files
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
