import mongoose from "mongoose";

const Mavericks = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca'); //Mavericks
const Bulls = new mongoose.mongo.ObjectId('66cb91bdc3464f14678934ca'); //Bulls

import * as ID from "../data/data_IDs.js";

const teams = [
    {   
        _id: ID.Mavericks,
        name: "Mavericks",
        city: "Dallas",
        stadium: "American Airlines Center",
        division: "Southwest",
        conference: "West",
        records: ID.Mavericks_RECORD,
        players: [
            ID.Luka_Doncic,
            ID.Dorian_Finney_Smith,
            ID.Dwight_Powell,
            ID.Jalen_Brunson,
            ID.Reggie_Bullock
        ],
        coach: ID.Jason_Kidd
    }
    // {
    //     _id: Bulls,
    //     name: "Bulls",
    //     city: "Chicago",
    //     stadium: "United Center",
    //     division: "Central",
    //     conference: "East"
    // },
]

export { teams, Mavericks };



