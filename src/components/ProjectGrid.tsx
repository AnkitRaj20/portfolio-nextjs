"use client";
import Card from "@/components/shared/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectlist } from "@/constants/project";
import { useRouter } from "next/navigation";

const ProjectGrid = () => {
    const router = useRouter();
    const detailsPage = (id: string) => {
      router.push(`/projects/${id}`);
    }
  return (
    <Tabs defaultValue="all">
      <TabsList className="mx-24 text-white dark:bg-zinc-900">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="fullstack">FullStack</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-24 text-center mb-8">
          {projectlist.map((project): any => (
            <div key={project.id} onClick={() => detailsPage(project.id) }>
              <Card
                id={project.id}
                name={project.name}
                description={project.detailedDescription}
                languagesUsed={project.languagesUsed}
                github={project.github}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </TabsContent>
     
      <TabsContent value="fullstack">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-24 text-center">
          {projectlist.filter((p):any => p.tag === 'fullstack').map((project): any => (
            <div key={project.id} onClick={() => detailsPage(project.id) }>
              <Card
                id={project.id}
                name={project.name}
                description={project.detailedDescription}
                languagesUsed={project.languagesUsed}
                github={project.github}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="frontend">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-24 text-center">
          {projectlist.filter((p):any => p.tag === 'frontend').map((project): any => (
            <div key={project.id} onClick={() => detailsPage(project.id) }>
              <Card
                id={project.id}
                name={project.name}
                description={project.detailedDescription}
                languagesUsed={project.languagesUsed}
                github={project.github}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectGrid;
