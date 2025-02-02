import express from "express";
import Faq from "../models/Faq.js"; // Import FAQ Model
import { translateText } from "../utils/translate.js"; // Translation utility

const router = express.Router();

// POST: Create a new FAQ
router.post("/", async (req, res) => {
  try {
    const { question, answer, language } = req.body;

    // Validate data
    if (!question || !answer || !language) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Handle translation
    const translations = await translateText(question, answer, language);

    // Create new FAQ
    const newFaq = new Faq({
      question,
      answer,
      language,
      translations, // Store translations
    });

    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: Fetch FAQs by language (no caching)
router.get("/", async (req, res) => {
  const { lang } = req.query;

  try {
    let faqs;
    if (lang) {
      faqs = await Faq.find({ language: lang });
    } else {
      faqs = await Faq.find(); // Get all FAQs
    }

    res.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
