var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich suplementów z danej kategorii
module.exports.main = function(request, response) {
  let _categoryFilter = request.params.categoryFilter

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }
    
		var resultArray = new Array();
		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({category: _categoryFilter}).toArray(function(err, supplements) {
			if (err) {
				response.status(400).json(null);
			}

			response.json(supplements);
		});

	});

}
