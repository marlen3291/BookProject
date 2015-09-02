
//path to the users server controller
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

//
module.exports = function(app){

	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));
	app.get('/signout', users.signout);


    //Makes the route and url for the users page and includes methods
	app.route('/users')
	//Creates users
	   .post(users.create)
	//Retrieves a list of users
	   .get(users.list);
	   
    //Makes the route and url for the user's id page and includes its methods
	app.route('/users/:userId')
	//Gets specific user's information
	   .get(users.read)
	//Updates the specific user's information field
	   .put(users.update)
	//Deletes the specific user
	   .delete(users.delete)
	;
    
    //Turns the :userId into the user's userByID field in the database 
	app.param('userId', users.userByID);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		
		//*Attempted fix at facebook login
		scope: [ 'emails' ],
		failureRedirect: '/signin'
	}));
   //*Facebook, Twitter, and Google codes are outdated and do not work	
	app.get('/oauth/facebook/callback', passport.authenticate('facebook',
	{
	    //*Attempted fix at facebook login
	    scope: [ 'emails' ],
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}));

	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	app.get('/oauth/google', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		],
	}));
	
	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

};	
