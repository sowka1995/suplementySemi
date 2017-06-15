var connection = require('./../../common/connection.js');

// Wylistowanie wszystich produktów
module.exports.main = function(request, response) {

	connection(function(error, db) {
		if (error) {
				response.status(500).json(null)
		}
		
		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({}).toArray(function(err, supplements) {
			if (err) {
				response.status(400).json(null);
			}

			response.json(supplements);
		});

	});

}
