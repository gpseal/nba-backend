import Record from '../models/records.js'
import Team from '../models/teams.js'

const displayData = (dataName, response) => {
  //function to display data
  if (dataName.length === 0) {
    //display error if empty array is returned
    return response
      .status(410)
      .json({ success: false, msg: 'No content currently available' })
  } else return response.status(200).json({ success: true, data: dataName })
}

const errorMsg = (response, err) => {
  //function to display 500 error message
  return response.status(500).json({
    msg: err.message || 'Something went wrong while getting all records'
  })
}

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
    //sort records by URL query (eg "api/records?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'firstName': {
          const records = await Record.find({}).sort({ firstName: sortOrder })
          displayData(records, res)
          return
        }
        case 'lastName':
          {
            const records = await Record.find({}).sort({ lastName: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'age':
          {
            const records = await Record.find({}).sort({ age: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'careerWins':
          {
            const records = await Record.find({}).sort({ careerWins: sortOrder })
            displayData(records, res)
            return
          }
          break
        case 'careerLosses':
          {
            const records = await Record.find({}).sort({
              careerLosses: sortOrder
            })
            displayData(records, res)
            return
          }
          break
        case 'team':
          {
            const records = await Record.find({}).sort({ team: sortOrder })
            displayData(records, res)
            return
          }
          break
        default:
          res.status(404).json({
            msg: 'Category does not exist'
          })
          return
          break
      }
    }
    //filter data by URL query (eg "api/records?age=25")
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

    // Find a team by its id, then push the created record to its list of records.
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
