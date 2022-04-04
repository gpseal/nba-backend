import dotenv from "dotenv"; //allows access to variables in .env file

import Team from "../models/teams.js";
import { teams } from "../data/teams.js"; //data to be inserted into database

import Player from "../models/players.js";
import { players } from "../data/players.js";

import Coach from "../models/coaches.js";
// import { coaches } from "../data/coaches.js"; //data to be inserted into database

import PlayerStat from "../models/playerStats.js";
// import { playerStats } from "../data/playerStats.js";

import Record from "../models/records.js";
// import { records } from "../data/records.js";

import conn from "./connection.js";  //gets connection to database

dotenv.config(); //define and access environment variables

conn(process.env.MONGO_URI); // Connect to MongoDB atlas using connection string in .env file

const createAll = async (model, data) => {
  try {
    await model.deleteMany(); // Delete all documents in the teams collection
    await model.insertMany(data); // Insert documents into the teams collection (objects from teams.js files)
    console.log(`data successfully created`);
    process.exit(); // Exit the process
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit the process with an error
  }
};

const deleteAll = async (model) => {
  try {
    await model.deleteMany(); // Delete all documents in the teams collection
    console.log(`data successfully deleted`);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

switch (process.argv[2]) { //decides which function to run based on input in terminal.  "npm run teams:create" will enter teams, ""npm run teams:delete"" will delete teams

  case "-c": {
    createAll(Player, players);
    createAll(Team, teams);
    // createAll(Coach, coaches, "Coaches");
    // createAll(Team, teams, "Teams");
    // createAll(Team, teams, "Teams");
    break;
  }
  case "-d": {
    deleteAll(Player);
    // deleteAll(Team);
    // deleteAll(Coach);
    // deleteAll(PlayerStat);
    // deleteAll(Record);
    break;
  }
  // case "-createPlayers": {
  //   create(Player, players, "Players");
  //   break;
  // }
  // case "-deleteCoaches": {
  //   deleteAll(Player, "Players");
  //   break;
  // }
  // case "-createCoaches": {
  //   create(Player, players, "Players");
  //   break;
  // }
  // case "-deletePlayerStats": {
  //   deleteAll(Player, "Players");
  //   break;
  // }
  // case "-createPlayerStats": {
  //   create(Player, players, "Players");
  //   break;
  // }
  // case "-deleteRecords": {
  //   deleteAll(Player, "Players");
  //   break;
  // }
  // case "-createRecords": {
  //   create(Player, players, "Players");
  //   break;
  // }
  // default: {
  //   create(Team, teams, "Teams");
  // }
}