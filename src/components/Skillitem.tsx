/* eslint-disable @next/next/no-img-element */
"use client";
// import styles from "./skills.module.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface Props {
  skill: {
    url: string;
    name: string;
  };
}

const Skill = ({ skill: s }: Props) => {
  return (
    <div>
      <div
        key={s.name}
        className={`relative flex item-center justify-center shadow-lg ${s.name === 'GitHub' && "dark:bg-white" } dark:bg-gray-950 bg-opacity-45 rounded-full border-4 dark:border-zinc-800 w-[4rem] p-2 md:hover:scale-[1.125] transition-transform ease-in-out duration-300  
    `}
      >
        <TooltipProvider>
          <Tooltip delayDuration={300}>
            <TooltipTrigger>
              <Image
                className="w-full rounded-full items-center"
                alt={s.name}
                src={s.url}
                height={24}
                width={24}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{s.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Skill;
