var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
//Creates the schema for a user include information fields
var UserSchema = new Schema({

	firstName: String,

	lastName: String,

	email: {
		type: String,
		//index allows for a secondary index or key
		index: true,
		//regex expression to match a valid email address such as name@example.com
		match: /.+\@.+\..+/
	},

	username: {
		type:String,
		// trim clears leading and trailing whitespace
		trim: true,
		// unique allows username to be the unique index or primary key sort of
		unique: true,
		required: true
	},

	password: {
		type: String,
		//validate allows for a customizable validator; in this case, forces the password field to be 6 characters or longer
		validate: [
			function(password) {
				return password.length >= 6;
		},
		'Password should be longer'
		]
	},

	created: {
		type: Date,
		default: Date.now
	}, 

	role: {
		type: String,
		//enum allows the role to be only Admin, Owner, or User
		enum: ['Admin', 'Owner', 'User']
	},
	//website allows the url to have http if not already
	website: {
		type: String,
		get: function(url) {
			if (!url) {
				return url;
			}
			else {
				if ( url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
		    }

			return url;
			     
				}
			}
	},
	
});

//Virtual attribute to create a fullname by finding and using the first and last name; also breaks apart full name
UserSchema.virtual('fullName').get(function() {

	return this.firstName + ' ' + this.lastName;
})
				     .set(function(fullName) {
					var splitName = fullName.split(' ');
					this.firstName = splitName[0] || '';
					this.lastName = slitName[1] || '';
});

UserSchema.set('toJSON', {getters: true, virtuals: true });
mongoose.model('User', UserSchema);
