var connection = require('./../../common/connection.js');

// Informacje o konkretnym produkcie
module.exports.main = function(request, response) {
  let _productName = request.params.name

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }

		var supplementsCollection = db.collection('supplements');

		supplementsCollection.find({ 'name': _productName } , { _id: 0 }).toArray(function(err, supplement) {
			if (err) {
				response.status(400).json(null);
			}

			response.json(supplement);
		});

	});

}
