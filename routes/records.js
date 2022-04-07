import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getRecords,
  getRecordID,
  createRecord,
  updateRecord,
  deleteRecord,
} from '../controllers/records.js'

// Four routes that are mapped to the functions above
router.route('/').get(getRecords).post(createRecord)
router.route('/:id').put(updateRecord).get(getRecordID).delete(deleteRecord)

export default router // You do not need to enclose router in curly braces
