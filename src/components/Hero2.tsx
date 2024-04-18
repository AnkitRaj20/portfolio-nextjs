"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "./ui/moving-border";
const Hero2 = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-l from-gray-200 via-blue-100 to-stone-100'>
         <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent dark:bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
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
        <p className="mt-4 py-4 text-2xl font-normal  text-neutral-300 max-w-lg text-center mx-auto">
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

          <Link href={"/"} className="mx-6">
            <button className="inline-flex h-16 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-full">
              LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero2