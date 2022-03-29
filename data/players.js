import mongoose from "mongoose";

const playerID_1 = new mongoose.mongo.ObjectId('76cb91bdc3464f14678934ca'); //Luka
const playerID_2 = new mongoose.mongo.ObjectId('86cb91bdc3464f14678934ca'); //Bulls

const players = [
    {   
        _id: playerID_1,
        firstName: "Luka Pt 2",
        lastName: "Doncic",
        position: "Guard",
        age: "23",
        team: "56cb91bdc3464f14678934ca"
    },
]

export { players };