"use client";
import React from "react";
import Card from "./shared/Card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const FeaturedProjects = ({ projects = [] }: { projects?: any[] }) => {
  const router = useRouter();
  const detailsPage = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const filteredProjects = projects
    .filter((p): any => p.isFeatured)
    .filter((project) => project.sequence !== undefined)
    .sort((a, b) => Number(a.sequence) - Number(b.sequence));

  return (
    <section id="projects" aria-label="Featured Projects" className="bg-white dark:bg-black py-5">
      <div className="text-center mt-3">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8">
          My Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 text-center">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => detailsPage(project.id)}>
            <Card
              id={project.id}
              name={project.name}
              description={project.description || project.detailedDescription}
              languagesUsed={project.languagesUsed}
              github={project.github}
              url={project.url}
              image={project.image}
              images={project.images}
            />
          </div>
        ))}
      </div>

      <div className="flex item-center justify-center my-8">
        <Button
          variant="primary"
          size="lg"
          onClick={() => router.push("/projects")}
        >
          Show All Projects
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
