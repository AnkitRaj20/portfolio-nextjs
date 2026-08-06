import React from "react";
import { Timeline } from "@/components/timeline/NewTimeline";
import { timelineData } from "@/constants/education";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Timeline",
  description: "View the professional experience and educational timeline of Ankit Raj.",
};

export default function TimelinePage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <Timeline data={timelineData} />
    </div>
  );
}
