import mongoose from "mongoose";

const Mavericks = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca'); //Mavericks
const Bulls = new mongoose.mongo.ObjectId('66cb91bdc3464f14678934ca'); //Bulls


const teams = [
    {   
        _id: "56cb91bdc3464f14678934ca",
        name: "Mavericks",
        city: "Dallas",
        stadium: "American Airlines Center",
        division: "Southwest",
        conference: "West"
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



