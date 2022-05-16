import jwt from 'jsonwebtoken'

const authRoute = async (req, res, next) => {
  const authHeader = req.headers.authorization /** Please read this resource - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization */

  /** Check if a bearer token is given or a token starts with bearer */
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token provided')
  }

  /** Verify only the token */
  //Get token values without "Bearer".  Split token at space, take second part
  const token = authHeader.split(' ')[1]

  /** You have seen this before **/
  //verify jwt, match with secret in .env file
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    //get user that is logged in, get user id and name
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    console.log('Not authorized to access this route')
  }
};

export default authRoute;