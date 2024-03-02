"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function Hero() {
  return (
    <div className=" min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-zinc-600 dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, I&apos;m
          <strong className="block font-extrabold text-zinc-900 mt-5 dark:text-zinc-400">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={200}
              words={["Ankit Raj", "a FullStack Developer"]}
            />
          </strong>
        </h1>
        <p className="mt-4 text-2xl font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          Ready to collaborate?
        </p>
        <p className="mt-4 text-2xl font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          Let&apos;s build something extraordinary together.
        </p>
        <div className=" py-6 flex items-center justify-center">
        <Link href={"/"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 max-w-lg text-center mx-auto "
          >
            Contact Now
          </Button>
        </Link>
        </div>

       
      </div>
    </div>
  );
}
