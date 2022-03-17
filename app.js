import express from "express";

// Access all the routes exported from routes/teams.js
import teams from "./routes/teams.js";

// Create an Express application
const app = express();

const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.urlencoded({ extended: false })); // Parses incoming requests with urlencoded payloads
app.use(express.json()); // Parses incoming requests with JSON payloads

// To make it clear to the consumer that the application is an API, prefix the endpoint with /api
app.use("/api/teams", teams);

// Listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});