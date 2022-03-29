import mongoose from "mongoose";

const teamID_1 = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca'); //Mavericks
const teamID_2 = new mongoose.mongo.ObjectId('66cb91bdc3464f14678934ca'); //Bulls

const teams = [
    {   
        _id: teamID_1,
        name: "Mavericks Part 3",
        city: "Dallas",
        stadium: "American Airlines Center",
        division: "Southwest",
        conference: "West"
    },
    {   
        _id: teamID_2,
        name: "Bulls Part 3",
        city: "Chicago",
        stadium: "United Center",
        division: "Central",
        conference: "East"
    },
]

export { teams };


