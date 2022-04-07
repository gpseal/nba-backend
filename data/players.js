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
  },
  {
    _id: ID.Jalen_Brunson,
    firstName: 'Jalen',
    lastName: 'Brunson',
    position: 'Point Guard',
    age: 25,
    team: ID.Mavericks,
  },
  {
    _id: ID.Reggie_Bullock,
    firstName: 'Reggie',
    lastName: 'Bullock',
    position: 'Small Forward',
    age: 31,
    team: ID.Mavericks,
  },
  {
    _id: ID.Dorian_Finney_Smith,
    firstName: 'Dorian',
    lastName: 'Finney Smith',
    position: 'Power Forward',
    age: 28,
    team: ID.Mavericks,
  },
  {
    _id: ID.Dwight_Powell,
    firstName: 'Dwight',
    lastName: 'Powell',
    position: 'Center',
    age: 30,
    team: ID.Mavericks,
  },

  {
    _id: ID.Ayo_Dosunmu,
    firstName: 'Ayo',
    lastName: 'Dosunmu',
    position: 'Shooting Guard',
    age: 23,
    team: ID.Bulls,
  },
  {
    _id: ID.Alex_Caruso,
    firstName: 'Alex',
    lastName: 'Caruso',
    position: 'Shooting Guard',
    age: 28,
    team: ID.Bulls,
  },
  {
    _id: ID.Zach_LaVine,
    firstName: 'Zach',
    lastName: 'LaVine',
    position: 'Shooting Guard',
    age: 27,
    team: ID.Bulls,
  },
  {
    _id: ID.DeMar_DeRozan,
    firstName: 'DeMar',
    lastName: 'DeRozan',
    position: 'Small Forward',
    age: 32,
    team: ID.Bulls,
  },
  {
    _id: ID.Nikola_Vucevic,
    firstName: 'Nikola',
    lastName: 'Vucevic',
    position: 'Center',
    age: 31,
    team: ID.Bulls,
  },

  {
    _id: ID.Chris_Paul,
    firstName: 'Chris',
    lastName: 'Paul',
    position: 'Point Guard',
    age: 36,
    team: ID.Suns,
  },
  {
    _id: ID.Devin_Booker,
    firstName: 'Devin',
    lastName: 'Booker',
    position: 'Shooting Guard',
    age: 25,
    team: ID.Suns,
  },
  {
    _id: ID.Mikal_Bridges,
    firstName: 'Mikal',
    lastName: 'Bridges',
    position: 'Small Forward',
    age: 25,
    team: ID.Suns,
  },
  {
    _id: ID.Jae_Crowder,
    firstName: 'Jae',
    lastName: 'Crowder',
    position: 'Power Forward',
    age: 31,
    team: ID.Suns,
  },
  {
    _id: ID.Deandre_Ayton,
    firstName: 'Deandre',
    lastName: 'Ayton',
    position: 'Center',
    age: 23,
    team: ID.Suns,
  },
]

export { players }
