"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function Hero3() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
         <h1 className="h-auto text-3xl md:text-7xl font-bold dark:text-white text-center">
          Hi, I&apos;m
          <strong className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
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
        
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Ready to collaborate?
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Let&apos;s build something extraordinary together.
        </div>
{/*         <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
        <div className=" py-6 flex items-center justify-center">
          <Link href={"mailto:work.ankitraj177@gmail.com"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 max-w-lg text-center mx-auto "
            >
              Contact Now
            </Button>
          </Link>

          <Link target="_blank" href={"https://www.linkedin.com/in/ankit-raj-716781254/"} className="mx-6">
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
      </motion.div>
    </AuroraBackground>
  );
}