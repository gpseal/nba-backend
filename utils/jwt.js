import jwt from 'jsonwebtoken'

//CHECK TOKEN IS VALID
const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET) // Validate password inside .env file: P@ssw0rd123

//CREATE TOKEN
const createJWT = ({ payload }) => {
  //pass in payload of data
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    //generate and sign token (pass in payload of data, plus password from .env file)
    expiresIn: process.env.JWT_LIFETIME // .env file specifies when token expires (1hr)
  })
  return token
}

//STORE TOKEN IN COOKIE
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user }) //create token by calling createJWT function, pass in payload (users data (name, id etc))

  const oneDay = 1000 * 60 * 60 * 24 //specify lifespan of cookie

  //Specify attributes of cookie
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true
  })
}

export { isTokenValid, attachCookiesToResponse }
