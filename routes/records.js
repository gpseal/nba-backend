/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 * 
 * Imports functions from controllers/records.js and maps them to specified routes to be used when URLs are accessed
 * 
 */

import { Router } from 'express'
const router = Router() // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getRecords,
  getRecordByID,
  createRecord,
  updateRecord,
  deleteRecord
} from '../controllers/records.js'

// Four routes that are mapped to the functions above
router.route('/').get(getRecords).post(createRecord)
router.route('/:id').put(updateRecord).get(getRecordByID).delete(deleteRecord)

export default router
