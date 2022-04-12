import Record from '../models/records.js'
import Team from '../models/teams.js'

const getRecords = async (req, res) => {
  try {
    const records = await Record.find({})

    res.status(200).json({ success: true, data: records }) //once promise is fulfilled, return success message
  } catch (err) {
    res.status(500).json({
      msg: err.message || 'Something went wrong while getting all records' //show if promise not fulfilled
    })
  }
}

const getRecordID = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findById(id)

    if (!record) {
      return res.status(404).json({
        success: false,
        msg: `No record with the id ${id}`
      })
    }

    return res.status(200).json({ success: true, data: record })
  } catch (err) {
    res.status(500).json({
      msg: err.message || 'Something went wrong while deleting an record'
    })
  }
}

const createRecord = async (req, res) => {
  try {
    const record = new Record(req.body)
    await record.save()

    // Find a team by its id, then add record
    const team = await Team.findById({
      _id: record.team
    })
    team.record = record

    await team.save()

    const newRecords = await Record.find({})
    res.status(201).json({ success: true, data: newRecords })
  } catch (err) {
    res.status(500).json({
      msg: err.message || 'Something went wrong while creating a player'
    })
  }
}

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findByIdAndUpdate(id, req.body) //find section to update

    // Check if record does exist, return fail message if not
    if (!record) {
      return res.status(404).json({
        success: false,
        msg: `No record with the id ${id}`
      })
    }

    const updatedRecord = await Record.findById(id)
    res.status(200).json({ success: true, data: updatedRecord })
  } catch (err) {
    //display error if something went wrong
    res.status(500).json({
      msg: err.message || 'Something went wrong while updating an record'
    })
  }
}

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params
    const record = await Record.findByIdAndRemove(id)

    if (!record) {
      return res.status(404).json({
        success: false,
        msg: `No record with the id ${id}`
      })
    }

    const newRecords = await Record.find({})
    return res.status(200).json({ success: true, data: newRecords })
  } catch (err) {
    res.status(500).json({
      msg: err.message || 'Something went wrong while deleting an record'
    })
  }
}

export { getRecords, getRecordID, createRecord, updateRecord, deleteRecord }
