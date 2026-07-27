"use client";
import Image from "next/image";
import React from "react";
import Skill from "./Skillitem";

interface SkillsProps {
  skills: any[];
}

const Skills = ({ skills }: SkillsProps) => {
  const visibleSkills = skills?.filter((skill: any) => !skill.isHidden) || [];
  
  const groupedSkills = visibleSkills.reduce((acc: any, skill: any) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  const row1 = ["Frontend", "Backend", "Databases & Caching"];
  const row2 = ["AI Integration", "Tools", "Other"];

  const renderCard = (cat: string) => {
    if (!groupedSkills || !groupedSkills[cat] || groupedSkills[cat].length === 0) return null;
    return (
      <div 
        key={cat} 
        className="flex flex-col p-6 rounded-2xl bg-neutral-50 dark:bg-slate-900/40 border border-neutral-200 dark:border-slate-800 shadow-xl dark:shadow-none h-full"
      >
        <h3 className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-sm mb-6">{cat}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-2 justify-items-center">
          {groupedSkills[cat].map((s: any) => (
            <Skill key={s.url} skill={s} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-black py-10">
      <div className="text-center mt-3 ">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Skills
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          What do i know
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:max-w-7xl m-auto pb-8 px-4">
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {row1.map(renderCard)}
        </div>
        {/* Second Row: 2 Cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
          {row2.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
