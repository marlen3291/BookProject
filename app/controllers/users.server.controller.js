//Specifies type of model used which is User
var User = require('mongoose').model('User');

exports.create = function(req, res, next) {

    //Define User
	var user = new User(req.body);
	
	//Save User or display error
	user.save(function(err) {
		if (err) {
			return next(err);
		} 
		
		else {
			res.json(user);
		}
	});
};

//Retrieves list of users
exports.list = function(req, res, next){
	User.find({}, function(err, users) {
		if (err){
			return next(err);
		}
		else {
			res.json(users);
		}
	});
};

//Read users list?
exports.read = function(req, res) {
	res.json(req.user);
};

//Find user by their id
exports.userByID = function(req, res, next, id){
	User.findOne({
		_id: id
	}, function(err, user) {
		if(err) {
			return next(err);
		}
		else{
			req.user = user;
			next();
		}
	});
};

//Update user information based on id
exports.update = function(req, res, next) {
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

//Delete user based on id
exports.delete = function(req, res, next) {
	req.user.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.user);
		}
	})
};
