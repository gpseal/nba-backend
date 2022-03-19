import mongoose from "mongoose";

//creates schema definition
const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
  },

  location: {
    type: String,
    maxlength: 100,
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