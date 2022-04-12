// import { teams } from "../data.js";

import Team from '../models/teams.js'

//function to display data
const displayData = (dataName, response) => {
  if (dataName.length === 0) {
    //display error if empty array is returned
    return response
      .status(410)
      .json({ success: false, msg: 'No content currently available' })
  } else return response.status(200).json({ success: true, data: dataName })
}

//function to display 500 error message
const errorMsg = (response, err) => {
  return response.status(500).json({
    msg: err.message || 'Something went wrong with team data'
  })
}

//Function to display no existing data message
const noID = (response, id) => {
  return response.status(404).json({
    success: false,
    msg: `No team with the id ${id}`
  })
}

//SHOW ALL TEAMS
const getTeams = async (req, res) => {
  let sortOrder = 1
  let query = req.query

  if (req.query.order_by == 'des') {
    sortOrder = -1
  }

  try {
    //sort teams by URL query (eg "api/v1/teams?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'name': {
          const teams = await Team.find({}).sort({ name: sortOrder })
          displayData(teams, res)
          return
        }
        case 'city':
          {
            const teams = await Team.find({}).sort({ city: sortOrder })
            displayData(teams, res)
            return
          }
          break
        case 'stadium':
          {
            const teams = await Team.find({}).sort({ stadium: sortOrder })
            displayData(teams, res)
            return
          }
          break
        case 'division':
          {
            const teams = await Team.find({}).sort({ division: sortOrder })
            displayData(teams, res)
            return
          }
          break
        case 'conference':
          {
            const teams = await Team.find({}).sort({ conference: sortOrder })
            displayData(teams, res)
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
    //filter data by URL query (eg "api/v1/teams?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const teams = await Team.find(query) //display items that match query search
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(teams, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

const getTeamByID = async (req, res) => {
  try {
    const { id } = req.params
    const team = await Team.findById(id)

    if (!team) {
      return noID(res, id)
    }

    displayData(team, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

//CREATE NEW TEAM
const createTeam = async (req, res) => {
  try {
    await Team.create(req.body)

    const newTeams = await Team.find({})

    res.status(201).json({ success: true, data: newTeams })
  } catch (err) {
    res.status(500).json({
      msg: err.message || 'Something went wrong while creating an team'
    })
  }
}

const updateTeam = async (req, res) => {
  try {
    const { id } = req.params
    const team = await Team.findByIdAndUpdate(id, req.body) //find section to update
    const updatedTeam = await Team.findById(id)

    // Check if team does exist, return fail message if not
    if (!team) {
      return noID(res, id)
    }

    displayData(updatedTeam, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params
    const team = await Team.findByIdAndRemove(id)
    const newTeams = await Team.find({})

    if (!team) {
      return noID(res, id)
    }

    displayData(newTeams, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

export { getTeams, getTeamByID, createTeam, updateTeam, deleteTeam }
