
import Coach from "../models/coaches.js";
import Team from "../models/teams.js";
// import { coaches } from "../data.js";

// coach => success: true, data:  array of objects from data.js
const getCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find({});

    res.status(200).json({ success: true, data: coaches });  //once promise is fulfilled, return success message

  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all coaches",  //show if promise not fulfilled
    });
  }
};

const getCoachesID = (req, res) => {
  const { id } = req.params;
  // /coaches/1      requests specific id to update

  const coach = coaches.find(  //find section to send
    (coach) => coach.id === Number(id)
  );

  // Check if coach does exist
  if (!coach) {
    return res
      .status(404)
      .json({ success: false, msg: `No coach with the id ${id}` });
  }

  res.status(200).json({success: true, data: coach});

};

const createCoach = async (req, res) => {
    try {
      const coach = new Coach(req.body);
      await coach.save();
  
      // Find a team by its id, then add coach
      const team = await Team.findById({
        _id: coach.team,
      });
      team.coach = coach;
      await team.save();
  
      const newCoaches = await Coach.find({});
      res.status(201).json({ success: true, data: newCoaches });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while creating a player",
      });
    }
  };

  
  const updateCoach = async (req, res) => {
    try {
      const { id } = req.params;
      const coach = await Coach.findByIdAndUpdate(id, req.body); //find section to update
  
      // Check if coach does exist, return fail message if not
      if (!coach) {
        return res.status(404).json({
          success: false,
          msg: `No coach with the id ${id}`,
        });
      }
  
      const newCoaches = await Coach.find({});
      res.status(200).json({ success: true, data: newCoaches });

    } catch (err) {  //display error if something went wrong
      res.status(500).json({
        msg: err.message || "Something went wrong while updating an coach",
      });
    }
  };

  
  const deleteCoach = async (req, res) => {
    try {
      const { id } = req.params;
      const coach = await Coach.findByIdAndRemove(id);
  
      if (!coach) {
        return res.status(404).json({
          success: false,
          msg: `No coach with the id ${id}`,
        });
      }
  
      const newCoaches = await Coach.find({});
      return res.status(200).json({ success: true, data: newCoaches });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while deleting an coach",
      });
    }
  };


  export {
    getCoaches,
    getCoachesID,
    createCoach,
    updateCoach,
    deleteCoach,
  };