const express = require("express");
const Skill = require("../models/skill"); // Require the skill model
const router = express.Router(); // Create a router instance


// Route to fetch skills data = GET
router.get("/api/skills", async (req, res) => {
  try {
    console.log("GET /api/skills: called..........");
    const skills = await Skill.find(); // Fetch all skills from the collection
    //console.log("skills:", skills);
    res.json(skills); // Sends the fetched skills data back as a JSON response
    console.log("............GET /api/skills: Ended");
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ error: "Failed to fetch skills data" });
  }
});

// Route to add a new skill= POST
router.post("/api/skills", async (req, res) => {
  console.log("post /api/skills: called..........Adding new row...");
  try {
    const { skill, proficiency, certification, authority, dateIssued } =
      req.body; // destructures the necessary data from the request body

    console.log(
      " skill, proficiency, certification, authority, dateIssued :: ",
      skill,
      proficiency,
      certification,
      authority,
      dateIssued
    );

    // Validate request body
    if (!skill || !proficiency || !certification || !authority || !dateIssued) {
      return res
        .status(400)
        .json({ error: "Skill and proficiency are required fields" });
    }

    const newSkill = new Skill({
      skill,
      proficiency,
      certification,
      authority,
      dateIssued,
    });

    await newSkill.save();
    console.log("..............post /api/skills: Ended");
    res.status(201).json(newSkill); // Send back the newly created skill
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({ error: "Failed to add skill" });
  }
});

// Update an existing skill (PUT)
router.put("/api/skills/:id", async (req, res) => {
  try {
    console.log("PUT /api/skills: called..........");
    console.log("PUT /api/skills: called..........", req.params.id);
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    console.log(".............PUT /api/skills: Ended");
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: "Error updating skill", error });
  }
});

// DELETE endpoint to delete a skill by its ID
router.delete("/api/skills/:id", async (req, res) => {
  const { id } = req.params; // Extract skillId from the URL
  console.log("DELETE /api/skills: called..........");
  try {
    // Attempt to find and remove the skill by its ID
    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    console.log(".............DELETE /api/skills: Ended");
    // Return success message after deletion
    res.status(200).json({ message: "Skill successfully deleted" });
  } catch (error) {
    console.error("Error deleting skill:", error);
    res
      .status(500)
      .json({ message: "Error deleting skill. Please try again." });
  }
});

module.exports = router;