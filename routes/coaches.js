import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getCoaches,
  getCoachByID,
  createCoach,
  updateCoach,
  deleteCoach
} from '../controllers/coaches.js'

// Four routes that are mapped to the functions above
router.route('/').get(getCoaches).post(createCoach)
router.route('/:id').put(updateCoach).get(getCoachByID).delete(deleteCoach)

export default router // You do not need to enclose router in curly braces
