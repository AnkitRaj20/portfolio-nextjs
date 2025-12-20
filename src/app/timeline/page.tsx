
import React from "react";
import { Timeline } from "@/components/timeline/NewTimeline";
import { readContent } from "@/lib/json-cms";

const Page = async () => {
  const content = await readContent();
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
       <Timeline data={content?.timeline || []} />
    </div>
  );
};

export default Page;
