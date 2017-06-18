// API for supplements
var supplements = require('./controllers/supplement/index.js')

// routes
module.exports = function(app) {

  app.get('/', function(request, response) {
    response.send('Hello world from server!')
  })

  app.get('/api/supplements/listAllSupplements', supplements.listAllSupplements.main)
  app.get('/api/supplements/listAllCategories', supplements.listAllCategories.main)
  app.get('/api/supplements/listAllProducers', supplements.listAllProducers.main)

  app.get('/api/supplements/info/:name', supplements.showSupplement.main)

  app.get('/api/supplements/listFilteredSupplementsByCategory/:categoryFilter', supplements.listFilteredSupplementsByCategory.main)
  app.get('/api/supplements/listFilteredSupplementsByProducer/:producerFilter', supplements.listFilteredSupplementsByProducer.main)

  app.post('/api/supplements/addSupplement', supplements.addSupplement.main)
  app.post('/api/supplements/addSupplementOpinion', supplements.addSupplementOpinion.main)
  app.post('/api/supplements/deleteSupplement', supplements.deleteSupplement.main)

};
