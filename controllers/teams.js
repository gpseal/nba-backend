// import { teams } from "../data.js";

import Team from "../models/teams.js";

// team => success: true, data:  array of objects from data.js
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({});

    res.status(200).json({ success: true, data: teams });  //once promise is fulfilled, return success message

  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all teams",  //show if promise not fulfilled
    });
  }
};



const getTeamsID = (req, res) => {
  const { id } = req.params;
  // /teams/1      requests specific id to update

  const team = teams.find(  //find section to send
    (team) => team.id === Number(id)
  );

  // Check if team does exist
  if (!team) {
    return res
      .status(404)
      .json({ success: false, msg: `No team with the id ${id}` });
  }

  res.status(200).json({success: true, data: team});

};



const createTeam = async (req, res) => {
  try {
    await Team.create(req.body);

    const newTeams = await Team.find({});

    res.status(201).json({ success: true, data: newTeams });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while creating an team",
    });
  }
};


  
  const updateTeam = async (req, res) => {
    try {
      const { id } = req.params;
      const team = await Team.findByIdAndUpdate(id, req.body); //find section to update
  
      // Check if team does exist, return fail message if not
      if (!team) {
        return res.status(404).json({
          success: false,
          msg: `No team with the id ${id}`,
        });
      }
  
      const newTeams = await Team.find({});
      res.status(200).json({ success: true, data: newTeams });

    } catch (err) {  //display error if something went wrong
      res.status(500).json({
        msg: err.message || "Something went wrong while updating an team",
      });
    }
  };

  
  const deleteTeam = async (req, res) => {
    try {
      const { id } = req.params;
      const team = await Team.findByIdAndRemove(id);
  
      if (!team) {
        return res.status(404).json({
          success: false,
          msg: `No team with the id ${id}`,
        });
      }
  
      const newTeams = await Team.find({});
      return res.status(200).json({ success: true, data: newTeams });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while deleting an team",
      });
    }
  };


  export {
    getTeams,
    getTeamsID,
    createTeam,
    updateTeam,
    deleteTeam,
  };