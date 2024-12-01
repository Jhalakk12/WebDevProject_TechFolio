//main express server
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const path = require("path");

const skillRoutes = require("./routes/skillRoutes"); // Import  skill routes
const blogRoutes = require("./routes/blogRoutes"); // Import blog routes

// Require the skill model
const Skill = require("./models/skill");

// Require the Blog model
const Blog = require("./models/blog");

// mongo DB conection
mongoose
  .connect("mongodb://localhost:27017/techFolioDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB - techFolioDatabase");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware for parsing form data
app.use(express.json());


// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Register routes -Use the skill routes defined in the skillRoutes.js file
app.use(skillRoutes);
// Use the blog routes defined in the blogRoutes.js file
app.use(blogRoutes);


// Routes for Login
app.get("/", (req, res) => {
  res.render("login");
});

//Route for Skills
app.get("/skill", (req, res) => {
  res.render("skill");
});

//Route for Skills
app.get("/studentadmin", (req, res) => {
  res.render("studentadmin");
});


//Route for blog
app.get("/blog", (req, res) => {
  res.render("blog");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});