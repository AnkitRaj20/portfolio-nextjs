"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Button } from "./ui/button";

interface AboutProps {
  content: {
    title: string;
    heading: string;
    description: string;
    image: string;
    yearsOfExperience?: string;
    specialty?: string;
  };
  projectCount?: number;
}

export default function About({ content, projectCount }: AboutProps) {
  if (!content) return null;

  return (
    <section
      id="about"
      aria-label="About Me"
      className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.4] relative py-8"
    >
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          {content.title}
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8">
          {content.heading}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 sm:px-10 items-center">
        <div className="flex flex-col justify-center">
          <div>
            <TextGenerateEffect
              className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed"
              words={content.description}
            />

            <div className="flex flex-wrap items-center gap-3 mt-8 mb-8 z-30 relative">
              {content.yearsOfExperience && (
                <div className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  {content.yearsOfExperience}
                </div>
              )}
              {projectCount !== undefined && projectCount > 0 && (
                <div className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  {projectCount}+ Projects Shipped
                </div>
              )}
              {content.specialty && (
                <div className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  {content.specialty}
                </div>
              )}
            </div>

            <Link
              href={"/timeline"}
              className="inline-flex items-center group relative z-30"
            >
              <Button
                className="dark:text-white transition-all group-hover:pr-6"
                size={"lg"}
                variant={"secondary"}
              >
                View My Timeline
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={content.image}
            height={400}
            width={400}
            alt="Ankit Raj"
            className="rounded-full shadow-2xl border-4 border-neutral-200 dark:border-neutral-800 object-cover max-w-[280px] sm:max-w-[360px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
