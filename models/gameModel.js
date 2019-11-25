const mongoose = require('./connection.js')



const GameSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    zipcode: Number
})