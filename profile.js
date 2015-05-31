var http = require('http');
var printer = require('./printer');

// Connect to the API URL (http://teamtreehouse.com/username.json)
function get(category, username) {
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function (res) {
		var body = '';
		res.on('data', function(chunk) {
		body += chunk;
		});
		res.on('end', function() {
			if (res.statusCode === 200) {
				try {
					// Parse the data
					var profile = JSON.parse(body);
					// Print the data
					printer.printMessage(username, profile.badges.length, profile.points[category], category);
				} catch(e) {
				// Parse Error
				printer.printError(e);
				}
			} else {
				// Status Code Error
				printer.printError({message: "There was an error getting the profile for " + username + 
					". (" + http.STATUS_CODES[res.statusCode] + ")"});
			}
		});
	});
	// Connection Error
	request.on('error', printer.printError);
};

module.exports.get = get;