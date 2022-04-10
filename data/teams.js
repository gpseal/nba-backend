import mongoose from 'mongoose'

import * as ID from '../data/data_IDs.js'

const teams = [
  {
    _id: ID.Mavericks,
    name: 'Mavericks',
    city: 'Dallas',
    stadium: 'American Airlines Center',
    division: 'Southwest',
    conference: 'West',
    record: ID.Mavericks_RECORD,
    players: [
      ID.Luka_Doncic,
      ID.Dorian_Finney_Smith,
      ID.Dwight_Powell,
      ID.Jalen_Brunson,
      ID.Reggie_Bullock
    ],
    coach: ID.Jason_Kidd
  },
  {
    _id: ID.Bulls,
    name: 'Bulls',
    city: 'Chicago',
    stadium: 'United Center',
    division: 'Central',
    conference: 'East',
    record: ID.Bulls_RECORD,
    players: [
      ID.Ayo_Dosunmu,
      ID.Alex_Caruso,
      ID.Zach_LaVine,
      ID.DeMar_DeRozan,
      ID.Nikola_Vucevic
    ],
    coach: ID.Billy_Donovan
  },
  {
    _id: ID.Suns,
    name: 'Suns',
    city: 'Phoenix',
    stadium: 'Footprint Center',
    division: 'Pacific',
    conference: 'West',
    record: ID.Suns_RECORD,
    players: [
      ID.Chris_Paul,
      ID.Devin_Booker,
      ID.Mikal_Bridges,
      ID.Jae_Crowder,
      ID.Deandre_Ayton
    ],
    coach: ID.Monty_Williams
  }
]

export { teams }
