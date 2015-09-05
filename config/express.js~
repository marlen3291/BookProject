//Sets up node modules
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function(){
	var app = express();
	
	//Use morgan or compress based if project is being developed or used
	if (process.env.NODE_ENV === 'development') {
	    app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production'){
	    app.use(compress());
	}
	
	app.use(bodyParser.urlencoded({
	    extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));
	
	//specific path to the views 
	app.set('views', './app/views');
	//set the view type to be ejs instead of jade or html
	app.set('view engine', 'ejs');
	
	app.use(flash());
	//Allows passport module use in express	
	app.use(passport.initialize());
	app.use(passport.session());
    
    //specifies path to route.js files
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	//enables static elements by specifiying path to public
	app.use(express.static('./public'));

	return app;
};
