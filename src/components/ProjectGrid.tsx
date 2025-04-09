"use client";
import Card from "@/components/shared/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectlist } from "@/constants/project";
import { useRouter } from "next/navigation";

const ProjectGrid = () => {
  const router = useRouter();

  const detailsPage = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const renderProjects = (filterTag: string | null = null) => {
    const filteredProjects = projectlist
      .filter((project) => {
        return filterTag ? project.tag === filterTag : true;
      })
      .filter((project) => project.sequence !== undefined)
      .sort((a, b) => Number(a.sequence) - Number(b.sequence));

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 sm:mx-12 md:mx-24 text-center mb-8">
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
              tag={project.tag}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="all">
      <TabsList className="lg:mx-24 mx-6 my-2 text-black dark:bg-zinc-900 dark:text-white">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="fullstack">FullStack</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
      </TabsList>

      <TabsContent value="all">{renderProjects()}</TabsContent>
      <TabsContent value="fullstack">{renderProjects("fullstack")}</TabsContent>
      <TabsContent value="frontend">{renderProjects("frontend")}</TabsContent>
      <TabsContent value="backend">{renderProjects("backend")}</TabsContent>
    </Tabs>
  );
};

export default ProjectGrid;
