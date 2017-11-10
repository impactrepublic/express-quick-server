const express = require('express')
const mapData = require('./map.json')
const USMap = require('./USMap.json')
var path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (req, res) => {
  var texas = USMap.features.filter(e => {
    if(e.properties.STATE == 48) {
      return e
    }
  })
  res.json(texas)
})

app.listen(3001, () => {
  console.log('localhost on port 3001')
})