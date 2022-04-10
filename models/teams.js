import mongoose from 'mongoose'

//creates schema definition
const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20
  },

  city: {
    type: String,
    // required: true,
    maxlength: 20
  },

  stadium: {
    type: String,
    maxlength: 50
  },

  division: {
    type: String,
    // required: true,
    maxlength: 20
  },

  conference: {
    type: String,
    // required: true,
    maxlength: 20
  },

  record: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Record'
  },

  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
    }
  ],

  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach'
  }
})

export default mongoose.model('Team', teamsSchema) // shape of collection
