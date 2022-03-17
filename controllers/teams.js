// Importing teams from data,js
import { teams } from "../data.js";

//GET function
const getTeams = (req, res) => {
  res.status(200).json({ success: true, data: teams });
};

// POST function
const createTeam = (req, res) => {
  const { name } = req.body; //

  if (!name) {  //make sure a name has been added
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });//displays json message if unsuccessful
  }

  const id = teams[teams.length - 1].id + 1; //finds id at end of array
  // Key names are identical to assignment variables, so use property value shorthand
  teams.push({//adds new object to array
    id,
    name,
    city,
    stadium,
    conference,
    division,
  });
  res.status(201).json({ success: true, data: teams });//displays json message if successful along with updated data
};

const updateTeam = (req, res) => {
  const { id } = req.params;
  const team = teams.find(
    (team) => team.id === Number(id) //searches for object to update based on ID
  );

  // Check if team does exist
  if (!team) {
    return res
      .status(404)
      .json({ success: false, msg: `No team with the id ${id}` });
  }

  const newTeams = teams.map((team) => { //updates object within array based on ID number, new data array is created "newTeams"
    if (team.id === Number(id)) {
      // If team does exist, update its data
      team.name = req.body.name;
      team.city = req.body.city;
      team.stadium = req.body.stadium;
      team.conference = req.body.conference;
      team.division = req.body.division;
    }
    return team;
  });

  res.status(200).json({ success: true, data: newTeams });  //replaces existing data with updated data
};


// DELETE function
const deleteTeam = (req, res) => {
  const { id } = req.params;
  const team = teams.find(
    (team) => team.id === Number(id)
  );

  // Check if team does exist
  if (!team) {
    return res
      .status(404)
      .json({ success: false, msg: `No team with the id ${id}` });
  }

  const newTeams = teams.filter( //creates new array from function
    (team) => team.id !== Number(id) // If team ID does not match entered ID, add to newTeams array
  );
  res.status(200).json({ success: true, data: newTeams });  //replaces existing data with updated data
};

export {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
};