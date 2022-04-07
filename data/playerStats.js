
import mongoose from "mongoose";

import * as ID from "../data/data_IDs.js";

const Luka_Doncic_Stats = new mongoose.mongo.ObjectId('56cb91bdc3464f15678934ca'); //Luka
const playerID_2 = new mongoose.mongo.ObjectId('86cb91bdc3464f14678934ca'); //Bulls

const playerStats = [ //Luka
    {   
        _id: ID.Luka_Doncic_STATS,
        games: 10,
        player: ID.Luka_Doncic
    },
    {   
        _id: ID.Jalen_Brunson_STATS,
        games: 10,
        player: ID.Jalen_Brunson
    },
    {   
        _id: ID.Reggie_Bullock_STATS,
        games: 10,
        player: ID.Reggie_Bullock
    },
    {   
        _id: ID.Dorian_Finney_Smith_STATS,
        games: 10,
        player: ID.Dorian_Finney_Smith
    },
    {   
        _id: ID.Dwight_Powell_STATS,
        games: 10,
        player: ID.Dwight_Powell
    },
]

export { playerStats };