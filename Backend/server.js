const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");  // Changed from destructuring to regular require
const router = require("./routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());  // Added middleware to parse JSON bodies
app.use("/api",router);
const PORT = process.env.PORT || 3000;  // Changed PORT to 3000 as fallback

// Connect to database before starting server
dbConnect()  // Removed db. as we're importing the function directly
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  });

app.get("/", (req, res) => {  // Changed resp to res (convention)
    res.send(`<h1>This is home baby</h1>`);
});