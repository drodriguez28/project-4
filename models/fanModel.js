const mongoose = require('./connection.js')




const FanSchema = new mongoose.Schema({
  name: String,
  city: String,
  team: String,
  country: String,
  age: Number
})


const FanCollection = mongoose.model('Fan', FanSchema)

// get all 
const getAllFans = () => {
  return FanCollection.find({})
}

//get one
const getSingleFan = (id) => {
  return FanCollection.findById(id)
}

// create
const createFan = (fanData) => {
  return FanCollection.create(fanData)
}

//delete
const deleteFan = (id) => {
  return FanCollection.deleteOne({ _id: id })
}







module.exports = {
  getAllFans,
  getSingleFan,
  createFan,
  deleteFan
}
