var connection = require('./../../common/connection.js');
var ObjectID = require('mongodb').ObjectID;

// Usuwanie produktu po id
module.exports.main = function(request, response) {
  let _supplementId = ObjectID(request.body.supplementId);

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }

		var supplementsCollection = db.collection('supplements');

		supplementsCollection.remove( { _id: _supplementId }, function(err, result) {
			if (err) {
				response.status(400).json(null);
			}

			response.status(200).json('Pomyślnie usunięto produkt');
		});

	});

}
