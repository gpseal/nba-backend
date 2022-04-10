import mongoose from 'mongoose'

import * as ID from '../data/data_IDs.js'

const coaches = [
  {
    _id: ID.Jason_Kidd,
    firstName: 'Jason',
    lastName: 'Kidd',
    age: 49,
    careerWins: 245,
    careerLosses: 222,
    team: ID.Mavericks
  },
  {
    _id: ID.Billy_Donovan,
    firstName: 'Billy',
    lastName: 'Donovan',
    age: 56,
    careerWins: 120,
    careerLosses: 104,
    team: ID.Bulls
  },
  {
    _id: ID.Monty_Williams,
    firstName: 'Monty',
    lastName: 'Williams',
    age: 50,
    careerWins: 324,
    careerLosses: 299,
    team: ID.Suns
  },
  {
    firstName: 'Craig',
    lastName: 'Williams',
    age: 52,
    careerWins: 324,
    careerLosses: 299,
  }
]

export { coaches }
