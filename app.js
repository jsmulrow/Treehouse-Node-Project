var profile = require('./profile');
var category = process.argv[2];
var users = process.argv.slice(3);
users.forEach(function (user) {
	profile.get(category, user)
});