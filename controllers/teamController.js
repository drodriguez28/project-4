const express = require('express')


const teamApi = require('../models/teamModel.js')


const teamRouter = express.Router()


// get all 

teamRouter.get('/', (req, res) => {
    teamApi.getAllTeams()
        .then((allTeams) => {
            console.log(allTeams)
            res.json(allTeams)

        })
})


// get one 

teamRouter.get('/:id', (req, res) => {
    teamApi.getSingleTeam(req.params.id)
        .then((singleTeam) => {
            res.json(singleTeam)
        })
})