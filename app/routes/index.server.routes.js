

module.exports = function(app) {
    
    //path for the controller of the index page to locate and use it
	var index = require('../controllers/index.server.controller');
	
	//creates the index page url and route
	app.get('/', index.render);
};
