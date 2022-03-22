import cookieParser from "cookie-parser"; //stores JWT cookies
import dotenv from "dotenv";
import express from "express"

// Db
import conn from "./db/connection.js";

//Access all the routes exported from routes/institutions.js
import teams from "./routes/teams.js"
import players from "./routes/players.js"
import coaches from "./routes/coaches.js"
import records from "./routes/records.js"
import playerStats from "./routes/playerStats.js"
import auth from "./routes/auth.js"

import authRoute from "./middleware/auth.js"; //import middleware, for checking authentication

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000; //assigns port to listen to

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

//To make it clear to the consumer that the application is an API, prefix the endpoint with /api
app.use("/api", auth) 
app.use("/api/teams", authRoute, teams) //authRoute protects route using middleware (middleware/auth.js)
app.use("/api/players", authRoute, players) 
app.use("/api/coaches", authRoute, coaches) 
app.use("/api/records", authRoute, records) 
app.use("/api/playerStats", authRoute, playerStats) 


//connects to mongo db
const start = async () => {
    try {
      await conn(process.env.MONGO_URI); // Access the URL connection string in .env
      app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); //listen on port 3000
    } catch (err) {  // look for errors with connection (eg wrong password)
      console.log(err);  //displays error
    }
  };
  
  start();
  
  export default app;



