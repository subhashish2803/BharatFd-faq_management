import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS
import { connectDB } from "./config/db.js"; // Import database connection
import faqRoutes from "./routes/faqRoutes.js"; // Import FAQ Routes

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Connect to MongoDB and start the server
(async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log("Connected to MongoDB successfully!");

    // Register the FAQ routes
    app.use("/api/faqs", faqRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process on failure
  }
})();
