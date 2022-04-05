import mongoose from "mongoose";

import Team from "../models/teams.js";
// import { teams, Mavericks } from "../data/teams.js";
import * as ID from "../data/data_IDs.js";

//TEAM IDs
//56cb91bdc3464f14678934ca - Mavericks

// const ID_Luka_Doncic = new mongoose.mongo.ObjectId('76cb91bdc3464f14678934ca');
// const ID_Jalen_Brunson = new mongoose.mongo.ObjectId('624ba37f86c7892cbe5f2532');
// const ID_Reggie_Bullock = new mongoose.mongo.ObjectId('624ba38c86c7892cbe5f2538');
// const ID_Dorian_Finney_Smith = new mongoose.mongo.ObjectId('624ba39586c7892cbe5f253d');
// const ID_Dwight_Powell = new mongoose.mongo.ObjectId('624ba39c86c7892cbe5f2542');

const playerID_2 = new mongoose.mongo.ObjectId('86cb91bdc3464f14678934ca'); //Bulls

const players = [
    {   
        _id: ID.Luka_Doncic,
        firstName: "Luka",
        lastName: "Doncic",
        position: "Guard",
        age: 23,
        team: ID.Mavericks
    },
    {   
        _id: ID.Jalen_Brunson,
        firstName: "Jalen",
        lastName: "Brunson",
        position: "Shooting Guard",
        age: 25,
        team: ID.Mavericks
    },
    {   
        _id: ID.Reggie_Bullock,
        firstName: "Luka",
        lastName: "Doncic",
        position: "Guard",
        age: 25,
        team: ID.Mavericks
    },
    {   
        _id: ID.Dorian_Finney_Smith,
        firstName: "Luka",
        lastName: "Doncic",
        position: "Guard",
        age: 29,
        team: ID.Mavericks
    },
    {   
        _id: ID.Dwight_Powell,
        firstName: "Luka",
        lastName: "Doncic",
        position: "Guard",
        age: 27,
        team: ID.Mavericks
    }
]

export { players};