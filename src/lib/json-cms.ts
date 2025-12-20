
import fs from "fs/promises";
import path from "path";

const contentPath = path.join(process.cwd(), "src/data/content.json");

export async function readContent() {
  try {
    const data = await fs.readFile(contentPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading content.json:", error);
    return null;
  }
}

export async function updateContent(newData: any) {
  try {
    // Basic validation could be added here
    await fs.writeFile(contentPath, JSON.stringify(newData, null, 2), "utf-8");
    return { success: true };
  } catch (error) {
    console.error("Error updating content.json:", error);
    return { success: false, error };
  }
}
