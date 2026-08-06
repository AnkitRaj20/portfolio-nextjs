/* eslint-disable @next/next/no-img-element */
"use client";
// import styles from "./skills.module.css";
import Image from "next/image";

interface Props {
  skill: {
    whiteColor?: boolean;
    url: string;
    name: string;
  };
}

const Skill = ({ skill: s }: Props) => {
  if (!s || !s.url) return null; // Prevent Next.js Image crash for empty URLs

  return (
    <div className="flex flex-col items-center justify-start gap-2 h-full text-center">
      <div
        key={s.name}
        className={`relative flex items-center justify-center shadow-sm ${
          s.name === "GitHub" && "dark:bg-white"
        } dark:bg-gray-950 bg-opacity-45 rounded-full border border-neutral-200 dark:border-zinc-800 w-11 h-11 p-2 md:hover:scale-[1.1] transition-transform ease-in-out duration-300`}
      >
        <Image
          className={`w-full h-full rounded-full object-contain ${
            s?.whiteColor ? "bg-gray-100" : ""
          }`}
          alt={s.name}
          src={s.url}
          height={20}
          width={20}
        />
      </div>
      <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 text-center tracking-wide uppercase mt-1">
        {s.name}
      </p>
    </div>
  );
};

export default Skill;
