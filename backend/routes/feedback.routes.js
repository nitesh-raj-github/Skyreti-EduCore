const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

/**
 * @route   POST /api/feedback
 * @desc    Submit feedback
 */
router.post("/", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({ message: "All fields required" });
    }

    const feedback = await Feedback.create({
      name,
      rating,
      comment,
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/feedback
 * @desc    Get all feedback
 */
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
