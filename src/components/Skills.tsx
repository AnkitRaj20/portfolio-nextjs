"use client";
import React from "react";
import Skill from "./Skillitem";
import { cn } from "@/lib/utils";

interface SkillItemType {
  name: string;
  url: string;
  whiteColor?: boolean;
  category: string;
  isHidden?: boolean;
}

interface SkillsProps {
  skills: SkillItemType[];
}

interface SkillCellProps {
  category: string;
  skills: SkillItemType[];
  isAccented?: boolean;
  badge?: string;
  className?: string;
  gridColsClass?: string;
}

const SkillCell = ({
  category,
  skills = [],
  isAccented = false,
  badge,
  className,
  gridColsClass = "grid-cols-3 sm:grid-cols-4",
}: SkillCellProps) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-2xl border transition-colors duration-300 shadow-sm dark:shadow-none h-full",
        isAccented
          ? "bg-teal-500/[0.02] dark:bg-teal-500/[0.03] border-teal-500/40 dark:border-teal-500/40 hover:border-teal-500/70"
          : "bg-neutral-50 dark:bg-slate-900/40 border-neutral-200 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
          {category}
        </h3>
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            {badge}
          </span>
        )}
      </div>

      <div
        className={cn(
          "grid gap-y-6 gap-x-2 justify-items-center items-start my-auto",
          gridColsClass
        )}
      >
        {skills.map((s) => (
          <Skill key={s.name || s.url} skill={s} />
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skills = [] }: SkillsProps) => {
  const visibleSkills = skills.filter((skill) => !skill.isHidden);

  const groupedSkills = visibleSkills.reduce<Record<string, SkillItemType[]>>(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {}
  );

  const frontendSkills = groupedSkills["Frontend"] || [];
  const backendSkills = groupedSkills["Backend"] || [];
  const dbSkills = groupedSkills["Databases & Caching"] || [];
  const aiSkills = groupedSkills["AI Integration"] || [];
  const toolSkills = groupedSkills["Tools"] || [];

  return (
    <section
      id="skills"
      aria-label="Skills & Tech Stack"
      className="bg-white dark:bg-black py-10"
    >
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Skills &amp; Expertise
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8">
          Tech Stack
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto pb-8 px-4">
        {/* Cell 1: Frontend (2x2 on Desktop - High Volume) */}
        <SkillCell
          category="Frontend"
          skills={frontendSkills}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          gridColsClass="grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5"
        />

        {/* Cell 2: Backend (2x1 on Desktop - Single Accent Cell / Core Focus) */}
        <SkillCell
          category="Backend"
          skills={backendSkills}
          isAccented
          badge="Core Focus"
          className="md:col-span-1 lg:col-span-2"
          gridColsClass="grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6"
        />

        {/* Cell 3: Databases & Caching (2x1 on Desktop) */}
        <SkillCell
          category="Databases & Caching"
          skills={dbSkills}
          className="md:col-span-1 lg:col-span-2"
          gridColsClass="grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4"
        />

        {/* Cell 4: AI Integration (2x1 on Desktop) */}
        <SkillCell
          category="AI Integration"
          skills={aiSkills}
          className="md:col-span-1 lg:col-span-2"
          gridColsClass="grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
        />

        {/* Cell 5: Tools (2x1 on Desktop) */}
        <SkillCell
          category="Tools"
          skills={toolSkills}
          className="md:col-span-1 lg:col-span-2"
          gridColsClass="grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
        />
      </div>
    </section>
  );
};

export default Skills;
