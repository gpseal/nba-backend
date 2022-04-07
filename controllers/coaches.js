import Coach from '../models/coaches.js'
import Team from '../models/teams.js'

const getCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find({})

    return res.status(200).json({ success: true, data: coaches }) //once promise is fulfilled, return success message
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while getting all coaches', //show if promise not fulfilled
    })
  }
}

const getCoachID = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findById(id)
    console.log(coach)

    if (!coach) {
      return res.status(404).json({
        success: false,
        msg: `No coach with the id ${id}`,
      })
    }

    return res.status(200).json({ success: true, data: coach })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while deleting an coach',
    })
  }
}

const createCoach = async (req, res) => {
  try {
    const coach = new Coach(req.body)
    await coach.save()

    // Find a team by its id, then add coach
    const team = await Team.findById({
      _id: coach.team,
    })
    team.coach = coach
    await team.save()

    const newCoaches = await Coach.find({})
    return res.status(201).json({ success: true, data: newCoaches })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while creating a player',
    })
  }
}

const updateCoach = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findByIdAndUpdate(id, req.body) //find section to update

    // Check if coach does exist, return fail message if not
    if (!coach) {
      return res.status(404).json({
        success: false,
        msg: `No coach with the id ${id}`,
      })
    }

    const updatedCoach = await Coach.findById(id)
    return res.status(200).json({ success: true, data: updatedCoach })
  } catch (err) {
    //display error if something went wrong
    return res.status(500).json({
      msg: err.message || 'Something went wrong while updating an coach',
    })
  }
}

const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findByIdAndRemove(id)

    if (!coach) {
      return res.status(404).json({
        success: false,
        msg: `No coach with the id ${id}`,
      })
    }

    const newCoaches = await Coach.find({})
    return res.status(200).json({ success: true, data: newCoaches })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while deleting an coach',
    })
  }
}

export { getCoaches, getCoachID, createCoach, updateCoach, deleteCoach }
