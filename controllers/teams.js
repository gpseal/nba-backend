// import { teams } from "../data.js";

import Team from "../models/teams.js";

// team => success: true, data:  array of objects from data.js
//GET ALL TEAM DATA
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


//GET TEAM BY ID
const getTeamsID = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).json({
        success: false,
        msg: `No team with the id ${id}`,
      });
    }

    return res.status(200).json({ success: true, data: team });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while deleting an team",
    });
  }
};


//CREATE NEW TEAM
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
  

//UPDATE EXISTING TEAM
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

//DELETE TEAM
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