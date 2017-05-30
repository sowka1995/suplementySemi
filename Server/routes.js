// API for supplements
var supplements = require('./controllers/supplement/index.js')

// routes
module.exports = function(app) {

  app.get('/', function(request, response) {
    response.send('Hello world from server!')
  })
  
  app.get('/api/supplements/listAll', supplements.listAll.main)
};
