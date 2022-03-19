import mongoose from "mongoose";

const playersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

export default mongoose.model("Player", playersSchema);