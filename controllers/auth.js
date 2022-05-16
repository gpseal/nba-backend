/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 *
 * For handling registration and login functions
 *
 * register: Registers new user and stores data
 * login: Compares login details to registered users, if valid, creates token and stores in cookie, allows access to database
 * logout: Logs out user, expires cookie
 */

import User from '../models/users.js'
import getTokenUserData from '../utils/getTokenUserData.js'
import { attachCookiesToResponse } from '../utils/jwt.js'

/**
 * This function registers a new user that contains the info - name, email and password
 * @param {Request} req
 * @param {Response} res
 * @returns JSON message if status = 201. Returns JSON error message if status = 500
 */
const register = async (req, res) => {
  try {
    const user = await User.create(req.body) //collect and store user data
    const tokenUser = getTokenUserData(user) //get users name and ID from user data (getTokenUserData is a function in utils folder)
    return res.status(201).json({ success: true, data: tokenUser })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while registering a user'
    })
  }
}

/**
 * This function checks for valid data and logs a user in while creating a token and storing in a cookie
 * @param {Request} req
 * @param {Response} res
 * @returns Returns JSON error message if status = 401, 500
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body //get email and password from request body

    //checks that a valid username has been entered
    const user = await User.findOne({ email })
    if (!user) {
      //if email is incorrect
      return res.status(401).json({ success: false, msg: 'Invalid email' })
    }

    //checks that a valid password has been entered
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      //if password is incorrect
      return res.status(401).json({ success: false, msg: 'Invalid password' })
    }

    //OLD CODE, CAN REMOVE
    // const tokenUser = getTokenUserData(user)
    // attachCookiesToResponse({ res, user: tokenUser }) //from utils/jwt.js.  Creates token and stores in cookie
    // return res.status(201).json({ success: true, data: tokenUser })


    const token = user.createJWT() /** Calling the createJWT() in Users.js */

    //token in response so client can access it
    return res.status(201).json({
      success: true,
      token: token,
      msg: "User successfully logged in",
    });

  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while logging in a user'
    })
  }
}

/**
 * This function logs a user out of the database
 * @param {Request} req
 * @param {Response} res
 * @returns JSON message if status = 200
 */
const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000) // 1000 milliseconds = 1 second
  })
  return res.status(200).json({ success: true, msg: 'Logged out' })
}

export { register, login, logout }
