import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.URI; // URI should be in your .env file
    if (!uri) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(uri);

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there’s an error connecting to MongoDB
  }
};
