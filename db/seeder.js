import dotenv from "dotenv"; //allows access to variables in .env file

import Team from "../models/teams.js";
import { teams } from "../data/teams.js"; //data to be inserted into database
import conn from "./connection.js";  //gets connection to database

dotenv.config(); //define and access environment variables

conn(process.env.MONGO_URI); // Connect to MongoDB atlas using connection string in .env file

const createdTeams = async () => {
  try {
    await Team.deleteMany(); // Delete all documents in the teams collection
    await Team.insertMany(teams); // Insert documents into the teams collection (objects from teams.js files)
    console.log("Team data successfully created");
    process.exit(); // Exit the process
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit the process with an error
  }
};

const deleteTeams = async () => {
  try {
    await Team.deleteMany(); // Delete all documents in the teams collection
    console.log("Team data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

switch (process.argv[2]) { //decides which function to run based on input in terminal.  "npm run teams:create" will enter teams, ""npm run teams:delete"" will delete teams
  case "-d": { //add more cases to perform different functions
    // This case is looking for a specific flag, i.e., -d
    deleteTeams();
    break;
  }
  default: {
    createdTeams();
  }
}