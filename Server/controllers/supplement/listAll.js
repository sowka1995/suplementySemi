var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich dokumentów
module.exports.main = function(request, response) {

	connection(function(error, db) {
		var resultArray = new Array();
		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({}).toArray(function(err, supplements) {
			if (err) {
				response.status(400).json(null);
			}
			
			supplements.forEach(function(doc, err){
						resultArray.push(doc);
					},function(){
						response.json(resultArray);
					});

			response.json(supplements);
		});

	});

}
