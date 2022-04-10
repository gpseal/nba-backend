import console from 'console'
import Player from '../models/players.js'
import Team from '../models/teams.js'

const getPlayers = async (req, res) => {
  let sortOrder = 1
  const type = 'sort'
  let query = req.query
  // const sortVal = req.query.sort_by;

  const displayData = (dataName) => {
    if (dataName.length === 0) {
      return res.status(410).json({ success: false, msg: 'No content currently available' })
    }
    else
    return res.status(200).json({ success: true, data: dataName })
  }

  if (req.query.order_by == 'asc') {
    sortOrder = -1
  }

  try {
    //sort players by URL query (eg "api/players?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'firstName': 
        {
          const players = await Player.find({}).sort({ firstName: sortOrder })
          displayData(players)
          return;
        }
        case 'lastName':
          {
            const players = await Player.find({}).sort({ lastName: sortOrder })
            displayData(players)
            return;
          }
          break
        case 'position':
          {
            const players = await Player.find({}).sort({ position: sortOrder })
            displayData(players)
            return;
          }
          break
        case 'age':
          {
            const players = await Player.find({}).sort({ age: sortOrder })
            displayData(players)
            return;
          }
          break
        case 'team':
          {
            const players = await Player.find({}).sort({ team: sortOrder })
            displayData(players)
            return;
          }
          break
        default:
          res.status(404).json({
            msg: 'Category does not exist'
          });
          return;
          break
      }
    }
    //filter data by URL query (eg "api/players?age=25")
    else {
      const { page = 1, limit = 5 } = req.query
      const players = await Player.find(query)
        .limit(limit)
        .skip((query.page - 1) * limit)
      displayData(players)
    }
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while getting all players'
    })
  }
}

const getPlayerID = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)

    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`
      })
    }
    // displayData(player)
    return res.status(200).json({ success: true, data: player })

  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while finding player'
    })
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
    displayData(newPlayers)
    // return res.status(201).json({ success: true, data: newPlayers })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while creating a player'
    })
  }
}

const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findByIdAndUpdate(id, req.body) //find section to update

    // Check if player does exist, return fail message if not
    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`
      })
    }

    const updatedPlayer = await Player.findById(id)
    displayData(updatedPlayer)
    // return res.status(200).json({ success: true, data: updatedPlayer }) //show updated player
  } catch (err) {
    //display error if something went wrong
    return res.status(500).json({
      msg: err.message || 'Something went wrong while updating player'
    })
  }
}

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findByIdAndRemove(id)

    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`
      })
    }

    const newPlayers = await Player.find({})
    
    displayData(newPlayers)
    // return res.status(200).json({ success: true, data: newPlayers })
  } catch (err) {
    return res.status(500).json({
      msg: err.message || 'Something went wrong while deleting player'
    })
  }
}

export { getPlayers, createPlayer, updatePlayer, getPlayerID, deletePlayer }
