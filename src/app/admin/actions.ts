
"use server";

import { updateContent } from "@/lib/json-cms";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function saveContent(newData: any) {
  const result = await updateContent(newData);
  
  if (result.success) {
    revalidatePath("/"); // Revalidate the home page to show changes immediately
    revalidatePath("/admin/dashboard");
    return { success: true, message: "Content updated successfully!" };
  } else {
    return { success: false, message: "Failed to update content." };
  }
}

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, message: "No file provided" };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/\s+/g, "-")}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Ensure upload directory exists
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const publicPath = `/uploads/${filename}`;
    return { success: true, filePath: publicPath };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, message: "File upload failed" };
  }
}
