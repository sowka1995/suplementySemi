var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich suplementów danego producenta
module.exports.main = function(request, response) {
  let _producerFilter = request.params.producerFilter

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }

		var resultArray = new Array();
		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({producer: _producerFilter}).toArray(function(err, supplements) {
			if (err) {
				response.status(400).json(null);
			}

			response.json(supplements);
		});

	});

}
