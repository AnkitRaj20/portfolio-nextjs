"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "./ui/button";

interface HeroProps {
  content: {
    name: string;
    roles: string[];
    cta: { text: string; link: string };
    social: { linkedin: string };
  };
}

export default function Hero3({ content }: HeroProps) {
  if (!content) return null;

  return (
    <section id="hero" aria-label="Hero" className="w-full">
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
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-time &amp; Freelance</span>
          </div>

          <h1 className="h-auto text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hi, I&apos;m Ankit Raj
            <strong className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-6">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={200}
                words={content.roles || ["FullStack Developer"]}
              />
            </strong>
          </h1>

          <div className="font-light text-center text-base md:text-xl lg:text-2xl max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 py-4 leading-relaxed">
            Full-Stack Developer crafting modern web apps with React, Next.js,
            and Node.js — with real-world experience integrating AI into
            production systems.
          </div>

          <div className="py-4 flex items-center justify-center gap-4">
            <Link href={content.cta?.link || "mailto:work.ankitraj177@gmail.com"}>
              <Button variant="primary" size="lg">
                {content.cta?.text || "Contact Now"}
              </Button>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                content.social?.linkedin ||
                "https://www.linkedin.com/in/ankit-raj-716781254/"
              }
            >
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Button>
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
