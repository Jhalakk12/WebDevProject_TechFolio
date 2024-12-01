const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog title is required"],
    trim: true, //removes whitespaces from start and end
  },
  link: {
    type: String,
    required: [true, "Blog link is required"],
    trim: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Blog = mongoose.model("Blog", blogSchema); // Singular PascalCase
module.exports = Blog;