import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import { register, login, logout } from '../controllers/auth.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)

export default router // You do not need to enclose router in curly braces
