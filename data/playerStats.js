
import mongoose from "mongoose";

/*Player IDs
const ID_Luka_Doncic = new mongoose.mongo.ObjectId('76cb91bdc3464f14678934ca');
const ID_Jalen_Brunson = new mongoose.mongo.ObjectId('624ba37f86c7892cbe5f2532');
const ID_Reggie_Bullock = new mongoose.mongo.ObjectId('624ba38c86c7892cbe5f2538');
const ID_Dorian_Finney_Smith = new mongoose.mongo.ObjectId('624ba39586c7892cbe5f253d');
const ID_Dwight_Powell = new mongoose.mongo.ObjectId('624ba39c86c7892cbe5f2542');

*/

const Luka_Doncic_Stats = new mongoose.mongo.ObjectId('56cb91bdc3464f15678934ca'); //Luka
const playerID_2 = new mongoose.mongo.ObjectId('86cb91bdc3464f14678934ca'); //Bulls

const playerStats = [ //Luka
    {   
        _id: Luka_Doncic_Stats,
        games: 10,
        player: "76cb91bdc3464f14678934ca"
    },
]

export { playerStats };