import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getPlayers,
  createPlayer,
  updatePlayer,
  getPlayerByID,
  deletePlayer
} from '../controllers/players.js'

// Four routes that are mapped to the functions above
router.route('/').get(getPlayers).post(createPlayer)
router.route('/:id').put(updatePlayer).get(getPlayerByID).delete(deletePlayer)

// You can chain these if you wish. For example:
// router.route("/").get(getInstitution).post(createInstitution)
// router.route("/:id").put(updateInstitution).delete(deleteInstitution)

export default router // You do not need to enclose router in curly braces
