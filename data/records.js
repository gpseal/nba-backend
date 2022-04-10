import mongoose from 'mongoose'

import * as ID from '../data/data_IDs.js'

const records = [
  {
    _id: ID.Mavericks_RECORD,
    games: 80,
    wins: 50,
    losses: 30,
    confRank: 4,
    gamesBehind: 13.0,
    team: ID.Mavericks
  },
  {
    _id: ID.Bulls_RECORD,
    games: 80,
    wins: 45,
    losses: 35,
    confRank: 6,
    gamesBehind: 7.0,
    team: ID.Bulls
  },
  {
    _id: ID.Suns_RECORD,
    games: 80,
    wins: 63,
    losses: 17,
    confRank: 1,
    gamesBehind: 0.0,
    team: ID.Suns
  }
]

export { records }
