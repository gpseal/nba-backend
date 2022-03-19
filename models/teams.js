import mongoose from "mongoose";

//creates schema definition
const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
  },

  city: {
    type: String,
    required: true,
    maxlength: 100,
  },

  stadium: {
    type: String,
    maxlength: 100,
  },

  division: {
    type: String,
    // required: true,
    maxlength: 100,
  },

  conference: {
    type: String,
    // required: true,
    maxlength: 100,
  },

  record: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Record",
  },

  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],

  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
  }

});

export default mongoose.model("Team", teamsSchema); // shape of collection