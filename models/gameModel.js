const mongoose = require('./connection.js')



const GameSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    zipcode: Number
})

const GameCollection = mongoose.model('Game', GameSchema)


// get all 
const getAllGames = () => {
    return GameCollection.find({})
}

//get one
const getSingleGame = (id) => {
    return GameCollection.findById(id)
}


// create
const createGame = (gameData) => {
    return GameCollection.create(gameData)
}

//delete
const deleteGame = (id) => {
    return GameCollection.deleteOne({ _id: id })
  }

module.exports = {
    getAllGames,
    getSingleGame,
    createGame,
    deleteGame
}
