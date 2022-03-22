import { Router } from "express";
const router = Router(); // Create a new router object. This allows to handle various requests

// Importing the four functions
import {
    register,
    login,
    logout 
} from "../controllers/auth.js";

// Four routes that are mapped to the functions above
router.route("/").get(register)
router.route("/:id").put(login).get(logout)


export default router; // You do not need to enclose router in curly braces