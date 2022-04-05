import mongoose from "mongoose";

const ID_Jason_Kidd = new mongoose.mongo.ObjectId('66cb91bdc3464f14678934ca');

//TEAM IDs
//56cb91bdc3464f14678934ca - Mavericks

const coaches = [
    {   
        _id: ID_Jason_Kidd,
        firstName: "Jason",
        lastName: "Kidd",
        team: "56cb91bdc3464f14678934ca"
    },
]

export { coaches };