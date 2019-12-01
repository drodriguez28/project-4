const express = require('express')
const teamRouter = express.Router()
const axios = require('axios');


// get all 

teamRouter.get('/', (req, res) => {

    let apikey= process.env.APIKEY
    
    
    let config = {
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": apikey
        }

    }

    axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/297', config)


        .then((response) => {
            // console.log(response.data.api.results)
            // console.log(response.data.api.teams)
        
            teamsData = response.data.api.teams
            mxteams = []


            // for each item in the input array
            for (index = 0; index < teamsData.length; index++) {
                
                mxteams.push(teamsData[index].name)
            }
            
            res.json(mxteams)





        })
}
)

module.exports = {
    teamRouter
}

