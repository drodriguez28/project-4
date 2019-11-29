const express = require('express')


const trashApi = require('../models/trashModel.js')


const trashRouter = express.Router()



// get all 

trashRouter.get('/', (req, res) => {
    trashApi.getAllTrashs()
        .then((allTrashs) => {
            console.log(allTrashs)
            res.json(allTrashs)

        })
})


// get one 

trashRouter.get('/:id', (req, res) => {
    trashApi.getSingleTrash(req.params.id)
        .then((singleTrash) => {
            res.json(singleTrash)
        })
})



// create trash
trashRouter.post('/', (req, res) => {
    trashApi.createTrash(req.body)
        .then((createdTrash) => {
            res.json(createdTrash)
        })
})



//delete trash
trashRouter.delete('/:id', (req, res) => {
    trashApi.deleteTrash(req.params.id)
        .then((deletedTrash) => {
            res.json(deletedTrash)
        })
})


module.exports = {
    trashRouter
}