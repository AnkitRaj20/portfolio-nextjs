"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const words = `A Pursuing Master in Computer Application and seeking a job in a reputed company where I have enough scope for enhancing my skills and knowledge to work efficiently for the company's growth. I have completed my Six-month Internship at CodeMetrics. I am Open-Minded, Adaptable,Innovative, and Quick Learner.” Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS,PHP, JAVASCRIPT, MySql, REACT, NEXT JS, and MongoDB.Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.`;

export default function About() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.4] relative py-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
          </div>
        

        
        </div>
        <div>2</div>
        </div>
      </div>
   
  );
}
