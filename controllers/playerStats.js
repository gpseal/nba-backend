




import PlayerStat from '../models/playerStats.js'
import Player from '../models/players.js'

const displayData = (dataName, response) => {
  //function to display data
  if (dataName.length === 0) {
    //display error if empty array is returned
    return response
      .status(410)
      .json({ success: false, msg: 'No content available' })
  } else return response.status(200).json({ success: true, data: dataName })
}

const errorMsg = (response, err) => {
  //function to display 500 error message
  return response.status(500).json({
    msg: err.message || 'Something went wrong with playerStat data'
  })
}

const noID = (response, id) => {
  return response.status(404).json({
    success: false,
    msg: `No playerStat with the id ${id}`
  })
}

const getPlayerStats = async (req, res) => {
  let sortOrder = -1
  let query = req.query

  if (req.query.order_by == 'asc') {
    sortOrder = 1
  }

  try {
    //sort playerStats by URL query (eg "api/v1/playerStats?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'games': {
          const playerStats = await PlayerStat.find({}).sort({ games: sortOrder })
          displayData(playerStats, res)
          return
        }
        case 'ppg':
          {
            const playerStats = await PlayerStat.find({}).sort({ ppg: sortOrder })
            displayData(playerStats, res)
            return
          }
          break
        case 'rpg':
          {
            const playerStats = await PlayerStat.find({}).sort({ rpg: sortOrder })
            displayData(playerStats, res)
            return
          }
          break
        case 'apg':
          {
            const playerStats = await PlayerStat.find({}).sort({ apg: sortOrder })
            displayData(playerStats, res)
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
    //filter data by URL query (eg "api/v1/playerStats?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const playerStats = await PlayerStat.find(query) //display items that match query search
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(playerStats, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

const getPlayerStatByID = async (req, res) => {
  try {
    const { id } = req.params
    const playerStat = await PlayerStat.findById(id)

    if (!playerStat) {
      return noID(res, id)
    }

    displayData(playerStat, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const createPlayerStat = async (req, res) => {
  try {
    const playerStat = new PlayerStat(req.body)
    await playerStat.save()

    // Find a player by its id, then add playerStat
    const player = await Player.findById({
      _id: playerStat.player
    })

    player.playerStats = playerStat
    await player.save()

    const newPlayerStats = await PlayerStat.find({})
    displayData(newPlayerStats, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const updatePlayerStat = async (req, res) => {
  try {
    const { id } = req.params
    const playerStat = await PlayerStat.findByIdAndUpdate(id, req.body) //find section to update
    const updatedPlayerStat = await PlayerStat.findById(id)

    // Check if playerStat does exist, return fail message if not
    if (!playerStat) {
      return noID(res, id)
    }

    displayData(updatedPlayerStat, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const deletePlayerStat = async (req, res) => {
  try {
    const { id } = req.params
    const playerStat = await PlayerStat.findByIdAndRemove(id)
    const newPlayerStats = await PlayerStat.find({})

    if (!playerStat) {
      return noID(res, id)
    }

    displayData(newPlayerStats, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

export {
  getPlayerStats,
  getPlayerStatByID,
  createPlayerStat,
  updatePlayerStat,
  deletePlayerStat
}
