import mongoose from "mongoose";

const coachesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

export default mongoose.model("Coach", coachesSchema);