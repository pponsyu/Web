//const express = require('express')
//const bodyParser = require('body-parser');
//const morgan = require('morgan');
//const app = express()
//const models = require('./models/index');

console.log('Japprecie les fruits aux sirops')

// Decode json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Add a bit of logging
app.use(morgan('short'))

// Get all the users defined
/*app.get('/', function (req, res) {
  models.User.findAll()
    .then((users) => {
      res.json(users)
    })
})*/

app.get('/', function (req, res) {

    console.log("Hello World")
})

// Add a new user to the database
/*app.post('/', function(req, res) {
  models.User.create({
    username: req.body.username
  })
    .then(() => {
      res.send('User added !')
    })
})*/

//process.env.ENABLE_METRICS


// Synchronize models
//models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   * 
   * Listen only when database connection is sucessfull
   */
  app.listen(8080, function() {
    console.log('Express server listening on port 3000');
  });
//});
