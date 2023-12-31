/**
 * Author: Greg Seal
 * Date: April 2022
 * Course:  Introduction to app development
 *
 * For manipulating data within the Players collection.
 * Required functions are exported to the routes/players.js file and perform the following tasks:
 *
 * getPlayers: requests all player data for display, can be filtered, paginated and sorted depending on URL query
 * createPlayer: Adds new record to players collection
 * updatePlayer: Updates specified existing record in collection
 * getPlayerByID: Displays specified player record
 * deletePlayer:  Deletes specified player record
 */

import Player from '../models/players.js'
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
    msg: err.message || 'Something went wrong with player data'
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
    msg: `No player with the id ${id}`
  })
}

//SHOW ALL PLAYERS
const getPlayers = async (req, res) => {
  let sortOrder = 1
  let query = req.query

  //set sorting order
  if (req.query.order_by == 'des') {
    sortOrder = -1
  }

  try {
    //sort players by URL query (eg "api/v1/players?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'firstName': {
          const players = await Player.find({}).sort({ firstName: sortOrder })
          displayData(players, res)
          return
        }
        case 'lastName':
          {
            const players = await Player.find({}).sort({ lastName: sortOrder })
            displayData(players, res)
            return
          }
          break
        case 'position':
          {
            const players = await Player.find({}).sort({ position: sortOrder })
            displayData(players, res)
            return
          }
          break
        case 'age':
          {
            const players = await Player.find({}).sort({ age: sortOrder })
            displayData(players, res)
            return
          }
          break
        case 'team':
          {
            const players = await Player.find({}).sort({ team: sortOrder })
            displayData(players, res)
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
    //filter data by URL query (eg "api/v1/players?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const players = await Player.find(query) //display items that match query search
        .populate("team", [
          "-players",
          "-record",
          "-coach",
        ])
        .populate("playerStats", [
          "-player"
        ])
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(players, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

//GET PLAYER BY ID
const getPlayerByID = async (req, res) => {
  try {
    const { id } = req.params //get id from request
    const player = await Player.findById(id) //find player with matching ID

    if (!player) {
      //if player doesn't exist
      return noID(res, id)
    }

    displayData(player, res) //display player record
  } catch (err) {
    errorMsg(res, err)
  }
}

//CREATE NEW PLAYER
const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body)
    await player.save()

    // Find a team by its id, then push the created player to its list of players.
    const team = await Team.findById({
      _id: player.team
    })

    team.players.push(player)
    await team.save()
    const newPlayers = await Player.find({})

    displayData(player, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

//UPDATE EXISTING PLAYER
const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findByIdAndUpdate(id, req.body) //find section to update
    const updatedPlayer = await Player.findById(id)

    // Check if player does exist, return fail message if not
    if (!player) {
      return noID(res, id)
    }

    displayData(updatedPlayer, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

//DELETE PLAYER
const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findByIdAndRemove(id)
    const newPlayers = await Player.find({})

    if (!player) {
      return noID(res, id)
    }

    displayData(newPlayers, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

export { getPlayers, createPlayer, updatePlayer, getPlayerByID, deletePlayer }
