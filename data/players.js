import mongoose from 'mongoose'

// import Team from '../models/teams.js'
// import { teams, Mavericks } from "../data/teams.js";
import * as ID from '../data/data_IDs.js'

const players = [
  {
    _id: ID.Luka_Doncic,
    firstName: 'Luka',
    lastName: 'Doncic',
    position: 'Guard',
    age: 23,
    team: ID.Mavericks,
    playerStats: ID.Luka_Doncic_STATS
  },
  {
    _id: ID.Jalen_Brunson,
    firstName: 'Jalen',
    lastName: 'Brunson',
    position: 'Point Guard',
    age: 25,
    team: ID.Mavericks,
    playerStats: ID.Jalen_Brunson_STATS
  },
  {
    _id: ID.Reggie_Bullock,
    firstName: 'Reggie',
    lastName: 'Bullock',
    position: 'Small Forward',
    age: 31,
    team: ID.Mavericks,
    playerStats: ID.Reggie_Bullock_STATS
  },
  {
    _id: ID.Dorian_Finney_Smith,
    firstName: 'Dorian',
    lastName: 'Finney Smith',
    position: 'Power Forward',
    age: 28,
    team: ID.Mavericks,
    playerStats: ID.Dorian_Finney_Smith_STATS
  },
  {
    _id: ID.Dwight_Powell,
    firstName: 'Dwight',
    lastName: 'Powell',
    position: 'Center',
    age: 30,
    team: ID.Mavericks,
    playerStats: ID.Dwight_Powell_STATS
  },

  {
    _id: ID.Ayo_Dosunmu,
    firstName: 'Ayo',
    lastName: 'Dosunmu',
    position: 'Shooting Guard',
    age: 23,
    team: ID.Bulls,
    playerStats: ID.Ayo_Dosunmu_STATS
  },
  {
    _id: ID.Alex_Caruso,
    firstName: 'Alex',
    lastName: 'Caruso',
    position: 'Shooting Guard',
    age: 28,
    team: ID.Bulls,
    playerStats: ID.Alex_Caruso_STATS
  },
  {
    _id: ID.Zach_LaVine,
    firstName: 'Zach',
    lastName: 'LaVine',
    position: 'Shooting Guard',
    age: 27,
    team: ID.Bulls,
    playerStats: ID.Zach_LaVine_STATS
  },
  {
    _id: ID.DeMar_DeRozan,
    firstName: 'DeMar',
    lastName: 'DeRozan',
    position: 'Small Forward',
    age: 32,
    team: ID.Bulls,
    playerStats: ID.DeMar_DeRozan_STATS
  },
  {
    _id: ID.Nikola_Vucevic,
    firstName: 'Nikola',
    lastName: 'Vucevic',
    position: 'Center',
    age: 31,
    team: ID.Bulls,
    playerStats: ID.Nikola_Vucevic_STATS
  },

  {
    _id: ID.Chris_Paul,
    firstName: 'Chris',
    lastName: 'Paul',
    position: 'Point Guard',
    age: 36,
    team: ID.Suns,
    playerStats: ID.Chris_Paul_STATS
  },
  {
    _id: ID.Devin_Booker,
    firstName: 'Devin',
    lastName: 'Booker',
    position: 'Shooting Guard',
    age: 25,
    team: ID.Suns,
    playerStats: ID.Devin_Booker_STATS
  },
  {
    _id: ID.Mikal_Bridges,
    firstName: 'Mikal',
    lastName: 'Bridges',
    position: 'Small Forward',
    age: 25,
    team: ID.Suns,
    playerStats: ID.Mikal_Bridges_STATS
  },
  {
    _id: ID.Jae_Crowder,
    firstName: 'Jae',
    lastName: 'Crowder',
    position: 'Power Forward',
    age: 31,
    team: ID.Suns,
    playerStats: ID.Jae_Crowder_STATS
  },
  {
    _id: ID.Deandre_Ayton,
    firstName: 'Deandre',
    lastName: 'Ayton',
    position: 'Center',
    age: 23,
    team: ID.Suns,
    playerStats: ID.Deandre_Ayton_STATS
  }
]

export { players }
