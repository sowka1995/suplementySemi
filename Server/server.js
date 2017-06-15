var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var routes = require('./routes.js')

var app = express()
app.use(cors())
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
routes(app)

app.listen(3000)
console.log('Serwer uruchomiony na porcie 3000 ...')
