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

export { getPlayers, createPlayer };