const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    manufacturer:{
        type: String, 
        required: true
    },
    country:{
        type: String, 
        default: 'JAPAN'
    },
    year:{
        type: Number,
        min: 1886        
    }
}, { timeStamps: true})

module.exports = mongoose.model('Car', carSchema)