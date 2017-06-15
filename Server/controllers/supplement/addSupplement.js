var connection = require('./../../common/connection.js');

// Wylistowanie wszystkich kategorii
module.exports.main = function(request, response) {

	connection(function(error, db) {
    if (error) {
        response.status(500).json(null)
    }

		var obj = new Object();
		var supplementsCollection = db.collection('supplements');
    var base64Data = request.body.imageSource.replace(/^data:image\/jpeg;base64,/, "");
    var imagePath = 'C:\\Users\\Bartosz\\Source\\Repos\\suplementySemi\\Web\\src\\assets\\images\\' + request.body.image;

    require("fs").writeFile(imagePath, base64Data, 'base64', function(err) {
      console.log(err);
    });

    obj.name = request.body.name;
    if (request.body.weight) {
      obj.weight = request.body.weight;
    }
    obj.category = request.body.category;
    obj.producer = request.body.producer;
    obj.description = request.body.description;
    obj.price = request.body.price;
    obj.amount = request.body.amount;
    obj.image = request.body.image;

    supplementsCollection.insertOne(obj, (err, result) => {
      if (!err) {
        response.status(200).json(null)
      } else {
        response.status(400).json(err)
      }
    })

	});

}
