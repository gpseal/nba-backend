import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getTeams,
  getTeamByID,
  createTeam,
  updateTeam,
  deleteTeam
} from '../controllers/teams.js'

router.route('/').get(getTeams).post(createTeam)
router.route('/:id').put(updateTeam).get(getTeamByID).delete(deleteTeam)


export default router // You do not need to enclose router in curly braces
