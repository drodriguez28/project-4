const express = require('express')

const gameApi = require('../models/gameModel.js')


const gameRouter = express.Router()

//get all 

gameRouter.get('/', (req, res) => {
    gameApi.getAllGames()
        .then((allGames) => {
            console.log(allGames)
            res.json(allGames)

        })
})

// get one
gameRouter.get('/:id', (req, res) => {
    gameApi.getSingleGame(req.params.id)
        .then((singleGame) => {
            res.json(singleGame)
        })
})


// create game 
gameRouter.post('/', (req, res) => {
    gameApi.createGame(req.body)
        .then((createdGame) => {
            res.json(createdGame)
        })
})


//delete game
gameRouter.delete('/:id', (req, res) => {
    gameApi.deleteGame(req.params.id)
        .then((deletedGame) => {
            res.json(deletedGame)
        })
})




module.exports = {
    gameRouter
}
