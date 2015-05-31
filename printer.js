// Print out message
function printMessage(username, badgeCount, points, category) {
	var message = username + " has " + badgeCount + " total badges(s) and " + points + " points in " + category;
	console.log(message);
};

// Print out error messages
function printError(e) {
	console.error(e.message);
};

module.exports.printMessage = printMessage;
module.exports.printError = printError;