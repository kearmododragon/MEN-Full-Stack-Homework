const Car = require('../models/car')

module.exports = {
    index,
    new: newCar
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

function newCar (req, res){
    res.render("cars/new", {title: "Manufacturers"})
}