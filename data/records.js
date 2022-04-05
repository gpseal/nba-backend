import mongoose from "mongoose";

const ID_Mavericks_Record = new mongoose.mongo.ObjectId('46cb91bdc8464f14678934ca'); 

//TEAM IDs
//56cb91bdc3464f14678934ca - Mavericks

const records = [
    {   
        _id: ID_Mavericks_Record,
        games: 20,
        team: "56cb91bdc3464f14678934ca"
    },
]

export { records };