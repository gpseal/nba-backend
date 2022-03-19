import dotenv from "dotenv";
import express from "express"

import conn from "./db/connection.js";

//Access all the routes exported from routes/institutions.js
import teams from "./routes/teams.js"
import players from "./routes/players.js"
import coaches from "./routes/coaches.js"
import records from "./routes/records.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000; //assigns port to listen to

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//To make it clear to the consumer that the application is an API, prefix the endpoint with /api
app.use("/api/teams", teams) 
app.use("/api/players", players) 
app.use("/api/coaches", coaches) 
app.use("/api/records", records) 

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



