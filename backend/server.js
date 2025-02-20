const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./Database/database');
const multer = require("multer");
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json());


// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Connection error:", err);
  else console.log("Connected to PostgreSQL:", res.rows[0]);
});

app.use("/upload", express.static(path.join(__dirname, "upload")));


// Serve static files from the "uploads" directory
app.get("/api/roles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM roles"); // Fetch data from the database
    
    res.json(result.rows); // Send the data as a JSON response
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



const PORT = process.env.PORT || 5000;
// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });