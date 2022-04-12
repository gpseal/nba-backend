import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getPlayerStats,
  getPlayerStatByID,
  createPlayerStat,
  updatePlayerStat,
  deletePlayerStat
} from '../controllers/playerStats.js'

// Four routes that are mapped to the functions above
router.route('/').get(getPlayerStats).post(createPlayerStat)
router
  .route('/:id')
  .put(updatePlayerStat)
  .get(getPlayerStatByID)
  .delete(deletePlayerStat)

export default router // You do not need to enclose router in curly braces
