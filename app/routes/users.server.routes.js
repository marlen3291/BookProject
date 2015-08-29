
//path to the users server controller
var users = require('../../app/controllers/users.server.controller');

//
module.exports = function(app){
    //Makes the route and url for the users page and includes methods
	app.route('/users')
	//Creates users
	   .post(users.create)
	//Retrieves a list of users
	   .get(users.list);
	   
    //Makes the route andurl for the user's id page and includes its methods
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
};
