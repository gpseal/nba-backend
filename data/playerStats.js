
import mongoose from "mongoose";

const Luka_Doncic_Stats = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca'); //Luka
const playerID_2 = new mongoose.mongo.ObjectId('86cb91bdc3464f14678934ca'); //Bulls

const playerStats = [ //Luka
    {   
        _id: Luka_Doncic_Stats,
        games: 10,
        player: "76cb91bdc3464f14678934ca"
    },
]

export { playerStats };