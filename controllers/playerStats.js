
import PlayerStat from "../models/playerStats.js";
import Team from "../models/teams.js";


const getPlayerStats = async (req, res) => {
  try {
    const playerStats = await PlayerStat.find({});

    res.status(200).json({ success: true, data: playerStats });  //once promise is fulfilled, return success message

  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all playerStats",  //show if promise not fulfilled
    });
  }
};


const getPlayerStatID = async (req, res) => {
    try {
      const { id } = req.params;
      const playerStat = await PlayerStat.findById(id);
  
      if (!playerStat) {
        return res.status(404).json({
          success: false,
          msg: `No playerStat with the id ${id}`,
        });
      }
  
      return res.status(200).json({ success: true, data: playerStat });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while deleting an playerStat",
      });
    }
};

const createPlayerStat = async (req, res) => {
    try {
      const playerStat = new PlayerStat(req.body);
      await playerStat.save();
  
      // Find a team by its id, then add playerStat
      const team = await Team.findById({
        _id: playerStat.team,
      });
      team.playerStat = playerStat;

      // if (playerStat) {
      //   return res.status(404).json({
      //     success: false,
      //     msg: `PlayerStat for this team already exists, please update existing playerStat`,
      //   });
      // }
    
      await team.save();
  
      const newPlayerStats = await PlayerStat.find({});
      res.status(201).json({ success: true, data: newPlayerStats });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while creating a player",
      });
    }
};

  
const updatePlayerStat = async (req, res) => {
    try {
      const { id } = req.params;
      const playerStat = await PlayerStat.findByIdAndUpdate(id, req.body); //find section to update
  
      // Check if playerStat does exist, return fail message if not
      if (!playerStat) {
        return res.status(404).json({
          success: false,
          msg: `No playerStat with the id ${id}`,
        });
      }
  
      const updatedPlayerStat = await PlayerStat.findById(id);
      res.status(200).json({ success: true, data: updatedPlayerStat });

    } catch (err) {  //display error if something went wrong
      res.status(500).json({
        msg: err.message || "Something went wrong while updating an playerStat",
      });
    }
};

  
const deletePlayerStat = async (req, res) => {
    try {
      const { id } = req.params;
      const playerStat = await PlayerStat.findByIdAndRemove(id);
  
      if (!playerStat) {
        return res.status(404).json({
          success: false,
          msg: `No playerStat with the id ${id}`,
        });
      }
  
      const newPlayerStats = await PlayerStat.find({});
      return res.status(200).json({ success: true, data: newPlayerStats });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while deleting an playerStat",
      });
    }
};


export {
    getPlayerStats,
    getPlayerStatID,
    createPlayerStat,
    updatePlayerStat,
    deletePlayerStat,
};