const express = require("express");
const Blog = require("../models/blog"); // Require the Blog model
const router = express.Router(); // Create a router instance

// Route to fetch all blog posts
router.get("/api/blog", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blog posts
    res.status(200).json(blogs); // Send a JSON response with all blogs
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: "Error fetching blogs." }); // Return a JSON error response
  }
});

// Route to add a new blog post
router.post("/api/blog", async (req, res) => {
  const { title, link } = req.body;

  try {
    // Validate required fields
    if (!title || !link) {
      return res.status(400).json({ error: "Title and link are required." });
    }

    const newBlog = new Blog({ title, link }); // Create a new Blog instance
    const savedBlog = await newBlog.save(); // Save the blog post to the database

    console.log("New blog added:", savedBlog);
    res.status(201).json(savedBlog); // Respond with the created blog post
  } catch (err) {
    console.error("Error adding blog:", err);
    res.status(500).json({ error: "Error adding blog." }); // Return a JSON error response
  }
});

// Route to update a blog post
router.put("/api/blog/:id", async (req, res) => {
  const { title, link } = req.body;

  try {
    // Validate required fields
    if (!title || !link) {
      return res.status(400).json({ error: "Title and link are required." });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id, // Find the blog by ID
      { title, link }, // Update fields
      { new: true, runValidators: true } // Return the updated document and validate fields
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    console.log("Blog updated:", updatedBlog);
    res.status(200).json(updatedBlog); // Respond with the updated blog post
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Error updating blog." }); // Return a JSON error response
  }
});

// Route to delete a blog post
router.delete("/api/blog/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    console.log("Blog deleted:", deletedBlog);
    res.status(200).json({ message: "Blog post deleted successfully." });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ error: "Error deleting blog." }); // Return a JSON error response
  }
});

module.exports = router; // Export the router