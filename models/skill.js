const mongoose = require("mongoose");

// Define the skill schema
const skillSchema = new mongoose.Schema({
  skill: { type: String, required: true },
  proficiency: { type: String, required: true },
  certification: { type: String, required: true },
  authority: { type: String, required: true },
  dateIssued: { type: String, required: true },
});

// Create and export the Skill model
const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
