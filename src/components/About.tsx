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
  };
}

export default function About({ content }: AboutProps) {
  if (!content) return null;

// With a passion for innovation and continuous learning, I’m always exploring new technologies and methodologies to stay ahead in the ever-evolving tech landscape. Let’s collaborate to build something exceptional!`

// const words = `I'm Ankit Raj, a Full-Stack Developer, particularly specializing in backend development. Passionate about building dynamic and scalable web applications. My expertise spans the MERN stack, Vue.js, Next.js and NuxtJs, with a strong focus on crafting robust backend solutions using Node.js. I excel at designing efficient databases with MongoDB, MySQL, and PostgreSQL. My focus is on creating seamless user experiences and delivering production-ready code that truly shines.`
// export default function About() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.4] relative py-8">
 
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          {content.title}
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          {content.heading}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center ">
        <div className="ml-10">
          <div>
            <TextGenerateEffect
              className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center"
              words={content.description}
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
            src={content.image}
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
