
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readContent } from "@/lib/json-cms";
import DashboardClient from "./DashboardClient";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/admin/login");
  }

  try {
    jwt.verify(token.value, JWT_SECRET);
  } catch (error) {
    redirect("/admin/login");
  }

  const content = await readContent();

  if (!content) {
      return <div className="p-10 text-center">Error: Could not read content file.</div>
  }

  return <DashboardClient initialContent={content} />;
}
