"use client";
import Image from "next/image";
import React from "react";
import { MySkills } from "@/constants";
import Skill from "./Skillitem";

const Skills = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Skills
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          What do i know
        </p>
      </div>

     
      <div className="flex items-center justify-center flex-wrap gap-8 sm:max-w-4xl m-auto pb-8">
        {MySkills.map((s):any => (
          <Skill key={s.url} skill={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
