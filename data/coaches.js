import mongoose from "mongoose";

const Jason_Kidd = new mongoose.mongo.ObjectId('66cb91bdc3464f14678934ca'); //Luka

const coaches = [
    {   
        _id: Jason_Kidd,
        firstName: "Jason",
        lastName: "Kidd",
        team: "56cb91bdc3464f14678934ca"
    },
]

export { coaches };