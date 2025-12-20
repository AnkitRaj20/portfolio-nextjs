"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

const Contact = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-white dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-800 dark:from-neutral-200 dark:to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to my contact section. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your
          visions.
        </p>
        <div className="relative z-10 mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                placeholder="Name"
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-white dark:bg-neutral-950 placeholder:text-neutral-500 dark:placeholder:text-neutral-700 p-4 text-neutral-800 dark:text-neutral-300"
                />
                 <input
                type="email"
                placeholder="hi@manuarora.in"
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-white dark:bg-neutral-950 placeholder:text-neutral-500 dark:placeholder:text-neutral-700 p-4 text-neutral-800 dark:text-neutral-300"
                />
            </div>
          
           <textarea
            placeholder="Your Message"
            rows={5}
            className="rounded-lg border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-white dark:bg-neutral-950 placeholder:text-neutral-500 dark:placeholder:text-neutral-700 p-4 text-neutral-800 dark:text-neutral-300"
          />
          <div className="flex justify-center">
             <Button className="z-10 bg-teal-600 hover:bg-teal-700 text-white w-full md:w-auto px-8">
                Send Message
             </Button>
          </div>
        </div>
      </div>
      <BackgroundBeams className="opacity-40" />
    </div>
  );
};
export default Contact;
