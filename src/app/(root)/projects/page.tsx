"use client";
import ProjectGrid from "@/components/ProjectGrid";
import Card from "@/components/shared/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectlist } from "@/constants/project";

const Page = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.2] relative flex justify-center flex-wrap py-8">

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>

      <div>
        <div className="text-center mt-3 ">
          <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
            All Projects
          </p>
        </div>

        <ProjectGrid />
      </div>
    </div>
  );
};

export default Page;
