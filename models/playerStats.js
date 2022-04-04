import mongoose from "mongoose";

const playerStatsSchema = new mongoose.Schema({

  
  games: {
    type: Number,
    maxlength: 10,
  },
  
  ppg: {
    type: Number,
    maxlength: 10,
  },

  rpg: {
    type: Number,
    maxlength: 10,
  },

  apg: {
    type: Number,
    maxlength: 10,
  },

  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  
});

export default mongoose.model("PlayerStat", playerStatsSchema);