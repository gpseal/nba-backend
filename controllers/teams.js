// Importing teams from data,js
import { teams } from "../data.js";

import Team from "../models/teams.js";

//GET function
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({}); // waiting for data from model constructor, {} represents all
    res.status(200).json({ success: true, data: teams });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all teams",
    });
  }
};


//POST function
const createTeam = async (req, res) => {
  try {
    await Team.create(req.body); //creating object from request body
    
    const newTeams = await Team.find({}); //The {} inside Team.find() represents all

    res.status(201).json({ success: true, data: newTeams }); //sends newTeams data as response
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while creating an team",
    });
  }
};

//UPDATE FUNCTION
const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body);

    if (!team) { //checks if id exists
      return res.status(404).json({
        success: false,
        msg: `No team with the id ${id}`,
      });
    }

    const newTeams = await Team.find({}); //data with updated entry is created
    res.status(200).json({ success: true, data: newTeams });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while updating an team",
    });
  }
};

// DELETE function
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
  createTeam,
  updateTeam,
  deleteTeam,
};