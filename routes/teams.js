/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 * 
 * Imports functions from controllers/teams.js and maps them to specified routes to be used when URLs are accessed
 * 
 */

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

// Four routes that are mapped to the functions above
router.route('/').get(getTeams).post(createTeam)
router.route('/:id').put(updateTeam).get(getTeamByID).delete(deleteTeam)

export default router
