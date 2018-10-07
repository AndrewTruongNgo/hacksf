const express = require('express');
const app = express();
const port = 4000;
const controller = require('../database/index.js');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/users/', (req, res) => {
  controller.searchQuery((error, results) => {
    if (error) {
      console.log('Search query failed')
    } else {
      res.send(results)
    }
  })
})

app.post('/add/', (req, res) => {
  controller.insertQuery(req.body, (error, results) => {
    if (error) {
      console.log('Inesrt query failed')
    } else {
      res.send('Posted!')
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
