import mongoose from 'mongoose'

const recordsSchema = new mongoose.Schema({
  games: {
    type: Number,
    maxlength: 10,
  },

  wins: {
    type: Number,
    maxlength: 10,
  },

  losses: {
    type: Number,
    maxlength: 10,
  },

  confRank: {
    type: Number,
    maxlength: 10,
  },

  gamesBehind: {
    type: Number,
    maxlength: 10,
  },

  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
})

export default mongoose.model('Record', recordsSchema)
