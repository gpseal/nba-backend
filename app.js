import dotenv from "dotenv";
import express from "express";

import conn from "./db/connection.js"; //

// Access all the routes exported from routes/teams.js
import teams from "./routes/teams.js";

dotenv.config(); //reads .env file, assigns to process.env

// Create an Express application
const app = express();

const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.urlencoded({ extended: false })); // Parses incoming requests with urlencoded payloads
app.use(express.json()); // Parses incoming requests with JSON payloads

// To make it clear to the consumer that the application is an API, prefix the endpoint with /api
app.use("/api/teams", teams);

// Listening on port 3000
const start = async () => {
  try {
    await conn(process.env.MONGO_URI); // Access the connection string in .env
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start(); //connects to MongoDb, starts development server

export default app;