import cookieParser from 'cookie-parser' //stores JWT cookies
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

// rate limit
import rateLimit from 'express-rate-limit'

// Db
import conn from './db/connection.js'

//Access all the routes exported from routes
import teams from './routes/teams.js'
import players from './routes/players.js'
import coaches from './routes/coaches.js'
import records from './routes/records.js'
import playerStats from './routes/playerStats.js'
import auth from './routes/auth.js'

import authRoute from './middleware/auth.js' //import middleware, for checking authentication

const version = 'v1'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())

const PORT = process.env.PORT || 3000 //assigns port to listen to

const limit = rateLimit({
  //settings for limiting traffic
  windowMs: 1 * 60 * 1000, //1 min
  max: 25 //25 requests every 1 min
})

//Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.use(limit) //applies rate-limit to all requests

//To make it clear to the consumer that the application is an API, prefix the endpoint with /api
app.use(`/api/${version}`, auth)
// app.use('/api/*', authRoute, coaches)
app.use(`/api/${version}/teams`, authRoute, teams) //authRoute protects route using middleware (middleware/auth.js)
app.use(`/api/${version}/players`, authRoute, players)
app.use(`/api/${version}/coaches`, authRoute, coaches)
app.use(`/api/${version}/records`, authRoute, records)
app.use(`/api/${version}/playerStats`, authRoute, playerStats)

// if endpoint does not exist catch 404 and forward to error handler
app.use((req, res) => {
  return res.status(404).json({
    msg: 'Your page was not found'
  })
})

//connects to mongo db
const start = async () => {
  try {
    await conn(process.env.MONGO_URI) // Access the URL connection string in .env
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)) //listen on port 3000
  } catch (err) {
    // look for errors with connection (eg wrong password)
    console.log(err) //displays error
  }
}

start()

export default app
