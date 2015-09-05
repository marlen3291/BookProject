//refers to the config file in the relative path
config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);
	
	//refers to the model used
	require('../app/models/user.server.model');
	require('../app/models/article.server.model');

	return db;
};

