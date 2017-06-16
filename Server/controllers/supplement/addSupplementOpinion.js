var connection = require('./../../common/connection.js');
var ObjectID = require('mongodb').ObjectID;

// Dodanie nowej opini do produktu
module.exports.main = function(request, response) {
	let _supplementId = new ObjectID(request.body.id)
	
	connection(function(error, db) {
		if (error) {
			response.status(500).json(null)
		}

		var supplementsCollection = db.collection('supplements');
		console.log(request.body)
		// dodanie tablicy opinions: [] jeśli nie istnieje
		supplementsCollection.update(
			{ 
				'_id': _supplementId, 
				'opinions': { 
					$exists: false 
				}
			}, 
			{ 
				$set: { 
					'opinions': [] 
					}
			}
		)
		
		supplementsCollection.update(
			{ '_id': _supplementId }, 
			{
				$push: {
					opinions: {
						$each: [{
							rate: request.body.rate,
							comment: request.body.comment,
							commentDate: request.body.commentDate
						}],
						$position: 0
					}
				}
			}, (err, result) => {
				if (!err) {
					response.status(200).json(null)
				} else {
					response.status(400).json(err)
				}
			}
		)
	});

}
