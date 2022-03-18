import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  stadium: {
    type: String,
  },
  conference: {
    type: String,
  },
  division: {
    type: String,
  },
});



export default mongoose.model("Team", teamsSchema); //constructor compiled from schema