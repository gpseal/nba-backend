import { Router } from "express";
const router = Router(); // Accessing the Router() object from express. This allows to handle various requests

// Importing the four functions
import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teams.js";

// Four routes that are mapped to the functions above
router.route("/").get(getTeams);
router.route("/").post(createTeam);

router.route("/:id").put(updateTeam);
router.route("/:id").delete(deleteTeam);

// You can chain these if you wish. For example:
// router.route("/").get(getTeam).post(createTeam)
// router.route("/:id").put(updateTeam).delete(deleteTeam)

export default router; // You do not need to enclose router in curly braces