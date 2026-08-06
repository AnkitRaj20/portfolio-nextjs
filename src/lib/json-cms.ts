import fs from "fs/promises";
import path from "path";
import dbConnect from "./db";
import Portfolio from "../models/Portfolio";

const contentPath = path.join(process.cwd(), "src/data/content.json");

export async function readContent() {
  try {
    await dbConnect();
    let portfolio = await Portfolio.findOne().lean();

    // Seed the database from the JSON file if it is empty
    if (!portfolio) {
      console.log("No portfolio document found in DB. Seeding from content.json...");
      try {
        const fileData = await fs.readFile(contentPath, "utf-8");
        const parsedData = JSON.parse(fileData);
        const newPortfolio = new Portfolio(parsedData);
        await newPortfolio.save();
        portfolio = newPortfolio.toObject() as any;
      } catch (seedError) {
        console.error("Error seeding DB from content.json:", seedError);
        return null;
      }
    }

    return portfolio;
  } catch (error) {
    console.error("Error reading from MongoDB:", error);
    // Fallback to local JSON if DB fails during local dev (optional but good for safety)
    try {
      const data = await fs.readFile(contentPath, "utf-8");
      return JSON.parse(data);
    } catch (fallbackError) {
       return null;
    }
  }
}

export async function updateContent(newData: any) {
  try {
    await dbConnect();
    
    // Find the first document and update it, or create if it doesn't exist
    const portfolio = await Portfolio.findOne();
    if (portfolio) {
      await Portfolio.updateOne({ _id: portfolio._id }, { $set: newData });
    } else {
      const newPortfolio = new Portfolio(newData);
      await newPortfolio.save();
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error updating MongoDB:", error);
    return { success: false, error };
  }
}
