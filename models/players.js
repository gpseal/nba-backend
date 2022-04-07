import mongoose from 'mongoose'

const playersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },

  lastName: {
    type: String,
    required: true,
    maxlength: 50,
  },

  position: {
    type: String,
    required: true,
    maxlength: 100,
  },

  age: {
    type: Number,
    maxlength: 5,
  },

  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },

  playerStats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PlayerStat',
  },
})

export default mongoose.model('Player', playersSchema)
