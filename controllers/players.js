import Player from "../models/players.js";
import Team from "../models/teams.js";

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.status(200).json({ success: true, data: players });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all players",
    });
  }
};

const getPlayerID = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);

    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`,
      });
    }

    return res.status(200).json({ success: true, data: player });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while finding player",
    });
  }
};


const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();

    // Find a team by its id, then push the created player to its list of players.
    const team = await Team.findById({
      _id: player.team,
    });
    team.players.push(player);
    await team.save();

    const newPlayers = await Player.find({});
    res.status(201).json({ success: true, data: newPlayers });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while creating a player",
    });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, req.body); //find section to update

    // Check if player does exist, return fail message if not
    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`,
      });
    }

    const updatedPlayer = await Player.findById(id);
    res.status(200).json({ success: true, data: updatedPlayer }); //show updated player

  } catch (err) {  //display error if something went wrong
    res.status(500).json({
      msg: err.message || "Something went wrong while updating player",
    });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndRemove(id);

    if (!player) {
      return res.status(404).json({
        success: false,
        msg: `No player with the id ${id}`,
      });
    }

    const newPlayers = await Player.find({});
    return res.status(200).json({ success: true, data: newPlayers });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while deleting player",
    });
  }
};

export {   
  getPlayers,
  createPlayer,
  updatePlayer,
  getPlayerID,
  deletePlayer};