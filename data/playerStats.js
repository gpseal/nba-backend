import mongoose from 'mongoose'
import * as ID from '../data/data_IDs.js'

const playerStats = [
  {
    _id: ID.Luka_Doncic_STATS,
    games: 63,
    ppg: 28.3,
    rpg: 9.1,
    apg: 8.8,
    player: ID.Luka_Doncic
  },
  {
    _id: ID.Jalen_Brunson_STATS,
    games: 77,
    ppg: 16.3,
    rpg: 3.9,
    apg: 4.8,
    player: ID.Jalen_Brunson
  },
  {
    _id: ID.Reggie_Bullock_STATS,
    games: 66,
    ppg: 8.7,
    rpg: 3.6,
    apg: 1.2,
    player: ID.Reggie_Bullock
  },
  {
    _id: ID.Dorian_Finney_Smith_STATS,
    games: 78,
    ppg: 10.9,
    rpg: 4.7,
    apg: 1.9,
    player: ID.Dorian_Finney_Smith
  },
  {
    _id: ID.Dwight_Powell_STATS,
    games: 80,
    ppg: 8.6,
    rpg: 4.9,
    apg: 1.2,
    player: ID.Dwight_Powell
  },

  {
    _id: ID.Ayo_Dosunmu_STATS,
    games: 75,
    ppg: 8.5,
    rpg: 2.8,
    apg: 3.3,
    player: ID.Ayo_Dosunmu
  },
  {
    _id: ID.Alex_Caruso_STATS,
    games: 41,
    ppg: 7.4,
    rpg: 3.6,
    apg: 4.0,
    player: ID.Alex_Caruso
  },
  {
    _id: ID.Zach_LaVine_STATS,
    games: 66,
    ppg: 24.4,
    rpg: 4.6,
    apg: 4.5,
    player: ID.Zach_LaVine
  },
  {
    _id: ID.DeMar_DeRozan_STATS,
    games: 75,
    ppg: 28.0,
    rpg: 5.2,
    apg: 5.0,
    player: ID.DeMar_DeRozan
  },
  {
    _id: ID.Nikola_Vucevic_STATS,
    games: 80,
    ppg: 17.8,
    rpg: 11.2,
    apg: 3.2,
    player: ID.Nikola_Vucevic
  },

  {
    _id: ID.Chris_Paul_STATS,
    games: 64,
    ppg: 14.7,
    rpg: 4.3,
    apg: 10.7,
    player: ID.Chris_Paul
  },
  {
    _id: ID.Devin_Booker_STATS,
    games: 67,
    ppg: 26.7,
    rpg: 5.0,
    apg: 4.9,
    player: ID.Devin_Booker
  },
  {
    _id: ID.Mikal_Bridges_STATS,
    games: 80,
    ppg: 14.3,
    rpg: 4.3,
    apg: 2.3,
    player: ID.Mikal_Bridges
  },
  {
    _id: ID.Jae_Crowder_STATS,
    games: 66,
    ppg: 9.5,
    rpg: 5.2,
    apg: 1.9,
    player: ID.Jae_Crowder
  },
  {
    _id: ID.Deandre_Ayton_STATS,
    games: 57,
    ppg: 17.2,
    rpg: 10.2,
    apg: 1.4,
    player: ID.Deandre_Ayton
  }
]

export { playerStats }
