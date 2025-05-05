"use client";
import { projectlist } from "@/constants/project";
import React from "react";
import Card from "./shared/Card";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation";

const FeaturedProjects = () => {
  const router = useRouter();
  const detailsPage = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const filteredProjects = projectlist
    .filter((p): any => p.isFeatured)
    .filter((project) => project.sequence !== undefined)
    .sort((a, b) => Number(a.sequence) - Number(b.sequence));

  return (
    <div className="bg-white dark:bg-black py-5">
      <div className="text-center mt-3 ">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          My Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 text-center">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => detailsPage(project.id)}>
            <Card
              id={project.id}
              name={project.name}
              description={project.detailedDescription}
              languagesUsed={project.languagesUsed}
              github={project.github}
              url={project.url}
              image={project.image}
            />
          </div>
        ))}
      </div>

      <div className="flex item-center justify-center my-8 ">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 max-w-lg text-center mx-auto "
          onClick={() => router.push("/projects")}
        >
          {" "}
          Show All Project
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
