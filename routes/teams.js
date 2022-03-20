import { Router } from "express";
const router = Router(); // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
  getTeams,
  getTeamsID,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teams.js";

// Four routes that are mapped to the functions above
// router.route("/:id").get(getTeamsID);
// router.route("/").post(createTeam);

router.route("/").get(getTeams).post(createTeam);
router.route("/:id").put(updateTeam).get(getTeamsID).delete(deleteTeam);
// router.route("/:id").delete(deleteTeam);

// You can chain these if you wish. For example:
// router.route("/").get(getInstitution).post(createInstitution)
// router.route("/:id").put(updateInstitution).delete(deleteInstitution)

export default router; // You do not need to enclose router in curly braces