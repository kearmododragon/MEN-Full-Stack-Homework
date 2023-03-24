const Car = require('../models/car')

module.exports = {
    index
}

function index(req, res){
    Car.find({})
    .then(function(cars){
        res.render('cars/index', {cars, title: 'Welcome to our cars!'})
    })
    .catch(function(err){
        console.log(err)
        res.redirect('/')
    })
}