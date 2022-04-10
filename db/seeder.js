import dotenv from 'dotenv' //allows access to variables in .env file

import Team from '../models/teams.js'
import { teams } from '../data/teams.js' //data to be inserted into database

import Coach from '../models/coaches.js'
import { coaches } from '../data/coaches.js' //data to be inserted into database

import Player from '../models/players.js'
import { players } from '../data/players.js'

import PlayerStat from '../models/playerStats.js'
import { playerStats } from '../data/playerStats.js'

import Record from '../models/records.js'
import { records } from '../data/records.js'

import conn from './connection.js' //gets connection to database

dotenv.config() //define and access environment variables

conn(process.env.MONGO_URI) // Connect to MongoDB atlas using connection string in .env file

// let promises = [];

const createAll = async (model, data, collection) => {
  try {
    await model.deleteMany() // Delete all documents in the teams collection
    await model.insertMany(data) // Insert documents into the collection (objects from .js files)
    console.log(`${collection} data successfully created`)
  } catch (err) {
    console.log(err)
    process.exit(1) // Exit the process with an error
  }
}

const deleteAll = async (model) => {
  try {
    await model.deleteMany() // Delete all documents in the teams collection
    console.log(`data successfully deleted`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

switch (
  process.argv[2] //decides which function to run based on input in terminal.  "npm run teams:create" will enter teams, ""npm run teams:delete"" will delete teams
) {
  case '-c': {
    await createAll(Team, teams, 'Teams')
    await createAll(PlayerStat, playerStats, 'Player Stats')
    await createAll(Player, players, 'Players')
    await createAll(Coach, coaches, 'Coaches')
    await createAll(Record, records, 'Records')
    break
  }

  case '-d': {
    await deleteAll(Team)
    await deleteAll(Player)
    await deleteAll(Coach)
    await deleteAll(Record)
    await deleteAll(PlayerStat)
    break
  }
}

process.exit()
