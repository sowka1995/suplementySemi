var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich kategorii
module.exports.main = function(request, response) {

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }

		var supplementsCollection = db.collection('supplements');

		supplementsCollection.distinct('category', {}, function(err, categories) {
			if (err) {
				response.status(400).json(null);
			}

			response.json(categories);
		});

	});

}
