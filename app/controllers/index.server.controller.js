//Code that controls the index page including how it renders

exports.render = function(req, res) { 
    
    //Makes a console log of user's last visit	
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	} 

	req.session.lastVisit = new Date();

    //Renders the index page with the title injected into index.ejs; the 'index' part refers to the index.ejs file in the views folder
	res.render('index', {
		title: 'Hello World',
		userFullName: req.user ? req.user.fullName : ''
	});
};
