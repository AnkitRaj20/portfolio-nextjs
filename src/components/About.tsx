"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Button } from "./ui/button";

// const words = `A Dedicated Master's in Computer Application candidate with a proactive approach to learning and a passion for driving impactful projects. Seeking opportunities to leverage expertise in full-stack development and problem-solving to contribute to a dynamic team in a forward-thinking company. I have completed my Six-month Internship at CodeMetrics. I am Open-Minded, Adaptable,Innovative, and Quick Learner.” Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS,PHP, JAVASCRIPT, MySql, REACT, NEXT JS, and MongoDB.Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.`;
// const words = `I’m a skilled Full-Stack Developer with a strong foundation in building efficient, user-focused web applications. Proficient in React, Next.js, Node.js, MongoDB, PHP, and MySQL, I specialize in crafting scalable solutions that align with business objectives.

// Currently, I work as a Backend Developer, where I’ve gained experience in developing complex systems, including e-commerce and financial platforms. My approach is rooted in problem-solving, adaptability, and a commitment to delivering high-quality results.

// With a passion for innovation and continuous learning, I’m always exploring new technologies and methodologies to stay ahead in the ever-evolving tech landscape. Let’s collaborate to build something exceptional!`

const words = `I’m a results-driven Full-Stack Developer with a strong focus on building scalable, performance-oriented web applications. I specialize in React, Next.js, Node.js, MongoDB, PHP, and MySQL, and I thrive on transforming complex requirements into clean, maintainable solutions.

Currently, I work as a Backend Developer, where I’ve built and optimized enterprise-grade systems — including e-commerce, financial platforms, and microservices-based applications. My role involves creating secure REST APIs, implementing third-party integrations, and ensuring high system reliability and performance.

I believe in writing efficient, production-ready code and constantly strive to improve through continuous learning and hands-on experimentation with modern tech stacks. Whether it's building from scratch, scaling systems, or improving UX through thoughtful backend architecture — I'm passionate about delivering value.

🚀 Open to new opportunities — full-time roles or freelance projects.
Let’s collaborate to build something exceptional.`
export default function About() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.4] relative py-8">
 
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          About
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          About Me
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center ">
        <div className="ml-10">
          <div>
            <TextGenerateEffect
              className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center"
              words={words}
            />
            <Link href={"/timeline"} className="relative">
              <Button
                className=" dark:text-zinc-400 mt-5"
                size={"sm"}
                variant={"secondary"}
              >
                TimeLine
              </Button>
              <span className="absolute right-[-2px] top-[-2px] flex h-2 w-2 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F11A7B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F11A7B]"></span>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/mine2.jpg"
            height={400}
            width={400}
            alt="me"
            className="m-auto flex  rounded-full "
          />
        </div>
      </div>
      <div className="flex items-center ml-10"></div>
    </div>
  );
}
