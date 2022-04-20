/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 *
 * For manipulating data within the Records collection.
 * Required functions are exported to the routes/records.js file and perform the following tasks:
 *
 * getRecords: requests all record data for display, can be filtered, paginated and sorted depending on URL query
 * createRecord: Adds new record to records collection
 * updateRecord: Updates specified existing record in collection
 * getRecordByID: Displays specified record data
 * deleteRecord:  Deletes specified record data
 */

import Record from '../models/records.js'
import Team from '../models/teams.js'

/**
 * This function displays requested data
 * @param {dataName} dataName 
 * @param {Response} response 
 * @returns Returns JSON error message if status = 410. Displays data if status = 200
 */
const displayData = (dataName, response) => {
  if (dataName.length === 0) {
    //display error if empty array is returned
    return response
      .status(410)
      .json({ success: false, msg: 'No content available' })
  } else return response.status(200).json({ success: true, data: dataName })
}

/**
 * This function displays 500 error message
 * @param {Response} response 
 * @param {error} err 
 * @returns Returns JSON error message if status = 500
 */
const errorMsg = (response, err) => {
  return response.status(500).json({
    msg: err.message || 'Something went wrong with record data'
  })
}

/**
 * This function displays error message if no ID exists
 * @param {Response} response 
 * @param {id} id
 * @returns Returns JSON error message if status = 404
 */
const noID = (response, id) => {
  return response.status(404).json({
    success: false,
    msg: `No record with the id ${id}`
  })
}

const getRecords = async (req, res) => {
  let sortOrder = -1
  let query = req.query

  if (req.query.order_by == 'asc') {
    sortOrder = 1
  }

  try {
    //sort records by URL query (eg "api/v1/records?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'games': {
          const records = await Record.find({}).sort({ games: sortOrder })
          displayData(records, res)
          return
        }
        case 'wins':
          {
            const records = await Record.find({}).sort({ wins: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'losses':
          {
            const records = await Record.find({}).sort({ losses: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'confRank':
          {
            const records = await Record.find({}).sort({ confRank: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'gamesBehind':
          {
            const records = await Record.find({}).sort({
              gamesBehind: sortOrder
            })
            displayData(records, res)
            return
          }
          break
        default:
          res.status(404).json({
            msg: 'Category / sort type does not exist'
          })
          return
          break
      }
    }
    //filter data by URL query (eg "api/v1/records?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const records = await Record.find(query) //display items that match query search
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(records, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

const getRecordByID = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findById(id)

    if (!record) {
      //if record does not exist
      return noID(res, id)
    }

    displayData(record, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const createRecord = async (req, res) => {
  try {
    const record = new Record(req.body)
    await record.save()

    // Find a team by its id, then add created record to team
    const team = await Team.findById({
      _id: record.team
    })
    team.record = record
    await team.save()
    const newRecords = await Record.find({})

    displayData(newRecords, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findByIdAndUpdate(id, req.body) //find section to update
    const updatedRecord = await Record.findById(id)

    // Check if record does exist, return fail message if not
    if (!record) {
      return noID(res, id)
    }

    displayData(updatedRecord, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findByIdAndRemove(id)
    const newRecords = await Record.find({})

    if (!record) {
      return noID(res, id)
    }

    displayData(newRecords, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

export { getRecords, getRecordByID, createRecord, updateRecord, deleteRecord }
