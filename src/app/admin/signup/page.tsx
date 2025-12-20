
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NavbarLogo } from "@/components/ui/resizable-navbar";

export default function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin/login");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-neutral-100 dark:bg-neutral-950">
       <div className="fixed top-5 left-0 right-0 z-50 flex justify-center">
         <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-neutral-200 dark:border-white/[0.1]">
            <NavbarLogo />
         </div>
      </div>

      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h2 className="mb-6 text-center text-3xl font-bold text-neutral-800 dark:text-neutral-100">
            Admin Signup
          </h2>
          
          {error && (
            <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-neutral-300 bg-neutral-50 p-2 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-neutral-300 bg-neutral-50 p-2 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-2 font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Sign up
            </button>
          </form>
          
          <div className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Already have an account?{" "}
            <Link href="/admin/login" className="text-blue-600 hover:underline dark:text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
