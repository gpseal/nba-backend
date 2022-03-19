import mongoose from "mongoose";

const coachesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },

  lastName: {
    type: String,
    // required: true,
    maxlength: 50,
  },
  
  age: {
    type: String,
    // required: true,
    maxlength: 50,
  },
  
  careerWins: {
    type: String,
    // required: true,
    maxlength: 50,
  },
  
  careerLosses: {
    type: String,
    // required: true,
    maxlength: 50,
  },

  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },

});

export default mongoose.model("Coach", coachesSchema);