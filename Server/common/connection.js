var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/suplementyspd';

module.exports = function(callback) {
	MongoClient.connect(url, callback);
}