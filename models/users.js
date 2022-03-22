import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

usersSchema.pre("save", async function () { //before user schema is saved, perform this function
    const salt = await bcryptjs.genSalt(10); // Asynchronously generates a salt (random characters) - defaults to 10 rounds if omitted
    this.password = await bcryptjs.hash(this.password, salt); // Asynchronously generates a hash for the given string, i.e., password
  });

  usersSchema.methods.comparePassword = function (password) {
    return bcryptjs.compare(password, this.password);
  };

  export default mongoose.model("User", usersSchema);