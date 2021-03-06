
const express = require('express')
const app = express()


const { fanRouter } = require('./controllers/fanController.js')
const { gameRouter } = require('./controllers/gameController.js')
const { trashRouter } = require('./controllers/trashController.js')
const { teamRouter } = require('./controllers/teamController.js')



app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())


/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */


app.use('/api/fan', fanRouter)
app.use('/api/game', gameRouter)
app.use('/api/trash', trashRouter)
app.use('/api/mxteams', teamRouter)






/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3001

/* Step 7
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
