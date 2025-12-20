"use client";
import React from "react";
import { Timeline } from "@/components/timeline/NewTimeline";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
       <Timeline />
    </div>
  );
};

export default Page;
