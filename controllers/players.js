import console from 'console'
import Player from '../models/players.js'
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
    msg: err.message || 'Something went wrong while getting all players'
  })
}

const noID = (response, id) => {
  return response.status(404).json({
    success: false,
    msg: `No player with the id ${id}`
  })
}

const getPlayers = async (req, res) => {
  let sortOrder = 1
  let query = req.query

  if (req.query.order_by == 'asc') {
    sortOrder = -1
  }

  try {
    //sort players by URL query (eg "api/players?sort_by=position&order_by=des")
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
            msg: 'Category does not exist'
          })
          return
          break
      }
    }
    //filter data by URL query (eg "api/players?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const players = await Player.find(query) //display items that match query search
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(players, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

const getPlayerID = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)

    if (!player) {
      return noID(res, id)
    }

    displayData(player, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

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
    
    displayData(newPlayers, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

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

export { getPlayers, createPlayer, updatePlayer, getPlayerID, deletePlayer }
