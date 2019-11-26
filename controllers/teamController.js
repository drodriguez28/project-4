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


// create team
teamRouter.post('/', (req, res) => {
    teamApi.createTeam(req.body)
        .then((createdTeam) => {
            res.json(createdTeam)
        })
})



//delete team
teamRouter.delete('/:id', (req, res) => {
    teamApi.deleteTeam(req.params.id)
        .then((deletedTeam) => {
            res.json(deletedTeam)
        })
})


module.exports = {
    teamRouter
}