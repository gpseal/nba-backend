import User from "../models/users.js";
import getTokenUserData from "../utils/getTokenUserData.js";
import { attachCookiesToResponse } from "../utils/jwt.js";

//CREATE REGISTER USER
const register = async (req, res) => {
    try {
      const user = await User.create(req.body); //collect user data
      const tokenUser = getTokenUserData(user); //get users name and ID from user data (getTokenUserData is a function in utils folder)
      return res.status(201).json({ success: true, data: tokenUser });
    } catch (err) {
      return res.status(500).json({
        msg: err.message || "Something went wrong while registering a user",
      });
    }
  };

  //LOGIN A USER
  const login = async (req, res) => {
    try {
      const { email, password } = req.body; //get email and password from request body
      
      const user = await User.findOne({ email });
      if (!user) {  //if email is incorrect
        return res.status(401).json({ success: false, msg: "Invalid email" });
      }
  
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {  //if password is incorrect
        return res.status(401).json({ success: false, msg: "Invalid password" });
      }
  
      const tokenUser = getTokenUserData(user);
      attachCookiesToResponse({ res, user: tokenUser }); //from utils/jwt.js
      return res.status(201).json({ success: true, data: tokenUser });
    } catch (err) {
      return res.status(500).json({
        msg: err.message || "Something went wrong while logging in a user",
      });
    }
  };

  //LOGOUT A USER
  const logout = async (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now() + 1000), // 1000 milliseconds = 1 second
    });
    return res.status(200).json({ success: true, msg: "Logged out" });
  };

  export { 
      register,
      login,
      logout 
};