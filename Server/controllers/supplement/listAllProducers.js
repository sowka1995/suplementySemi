var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich producentów
module.exports.main = function(request, response) {

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }
    
		var resultArray = new Array();
		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({}, {producer: 1, _id: 0}).toArray(function(err, producers) {
			if (err) {
				response.status(400).json(null);
			}
			response.json(producers);
		});

	});

}
