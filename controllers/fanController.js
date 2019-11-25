
const express = require('express')


const fanApi = require('../models/fanModel.js')


const fanRouter = express.Router()

//get all 

fanRouter.get('/', (req, res) => {
  fanApi.getAllFans()
    .then((allFans) => {
      console.log(allFans)
      res.json(allFans)

    })
})

// get one
fanRouter.get('/:id', (req, res) => {
  fanApi.getSingleFan(req.params.id)
    .then((singleFan) => {
      res.json(singleFan)
    })
})


// create fan 
fanRouter.post('/', (req, res) => {
  fanApi.createFan(req.body)
    .then((createdFan) => {
      res.json(createdFan)
    })
})


//delete fan
fanRouter.delete('/:id', (req, res) => {
  fanApi.deleteFan(req.params.id)
    .then((deletedFan) => {
      res.json(deletedFan)
    })
})




module.exports = {
  fanRouter
}
