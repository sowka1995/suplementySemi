var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich dokumentów
module.exports.main = function(request, response) {
	
	connection(function(error, db) {
		var supplementsCollection = db.collection('supplements');
		
		supplementsCollection.find().toArray(function(err, supplements) {
			if (err) {
				response.status(400).json(null);
			}
			
			response.json(supplements);
		});     
				
	});
	
}
