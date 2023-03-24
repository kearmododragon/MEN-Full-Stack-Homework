const Car = require('../models/car')

module.exports = {
    index
}

function index(req, res){
    res.render('cars/index', { title: 'Welcome to our cars!'})
    // Car.find({})
    // .then(function(cars){
        
    // })
    // .catch(function(err){
    //     console.log(err)
    //     res.redirect('/')
    // })
}