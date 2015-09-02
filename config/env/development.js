module.exports = {
	// Development configuration options
	
	//specifies mongodatabase url
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSessionSecret',
	//*facebook, twitter, and google are currently not functional
	facebook: {
		clientID: '280352735468821',
		clientSecret: '5c15e78652be3b5416242c1d33d5c4e1',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Application Id',
		clientSecret: 'Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},

	google: {

		clientID: 'Application Id',
		clientSecret: 'Application Secret',
		callbackURL: 'http://localhost:3000/oauth/google/callback'

	}

	//*
};
