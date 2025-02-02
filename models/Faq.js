import mongoose from "mongoose";

// Define the FAQ Schema
const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    language: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the FAQ model
const Faq = mongoose.model("Faq", faqSchema);

export default Faq;
