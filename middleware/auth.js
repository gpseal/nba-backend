//indicates that auth route is protected, that login is required to access

import { isTokenValid } from '../utils/jwt.js'

//function will be given as argument to routes that we want to protect
const authRoute = async (req, res, next) => {
  const token = req.signedCookies.token //request signed cookie

  if (!token) {
    //check that token exists for user
    return res
      .status(401)
      .json({ success: false, msg: 'Invalid authentication' })
  }

  try {
    //if token exists
    const { userId } = isTokenValid({ token })
    req.user = { userId: userId } //get user id from token
    next() // go to next middleware request (inside app.js)
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, msg: 'Invalid authentication' })
  }
}

export default authRoute
