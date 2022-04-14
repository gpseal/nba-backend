/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 * 
 * Imports functions from controllers/players.js and maps them to specified routes to be used when URLs are accessed
 * 
 */

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


export default router // You do not need to enclose router in curly braces
