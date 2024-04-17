/* eslint-disable @next/next/no-img-element */
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectlist } from "@/constants/project";
const Projects = () => {
  return (
    <div className="bg-white dark:bg-black py-5">
      <div className="text-center mt-3 ">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          What i built
        </p>
      </div>

      <Tabs defaultValue="all" className="text-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="fullstack">FullStack</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 text-center">
          <TabsContent value="all">
            {projectlist.map((project): any => (
              <div key={project.id}>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                  />

                  <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                    {/* <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
      10th Oct 2022
    </time> */}

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                        How to position your furniture for positivity
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae dolores, possimus pariatur animi temporibus
                      nesciunt praesentium dolore sed nulla ipsum eveniet
                      corporis quidem, mollitia itaque minus soluta, voluptates
                      neque explicabo tempora nisi culpa eius atque dignissimos.
                      Molestias explicabo corporis voluptatem?
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </TabsContent>
        </div>
        
      </Tabs>
    </div>
  );
};

export default Projects;
