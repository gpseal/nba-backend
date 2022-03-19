import mongoose from "mongoose";

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
  
});

export default mongoose.model("Record", recordsSchema);