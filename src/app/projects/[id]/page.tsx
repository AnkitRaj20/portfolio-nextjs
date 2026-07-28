/* eslint-disable @next/next/no-img-element */
import { readContent } from "@/lib/json-cms";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const content = await readContent();
  const project = content?.projects.find((p: any) => p.id === id);

  if (!project || project.isHidden) {
    return <div className="min-h-screen pt-28 pb-12 flex items-center justify-center text-2xl font-bold dark:text-white text-black">Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-gray-500 dark:via-slate-700 dark:to-zinc-900">
      <div className="dark:text-gray-100 grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Column: Title, Buttons, Image, Tech */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <a
              href={project?.url!}
              target="_blank"
              className="text-3xl sm:text-4xl font-bold hover:underline"
            >
              {project?.name}
            </a>
            <div className="flex flex-wrap gap-3">
              {project?.url && (
                <a target="_blank" href={project?.url}>
                  <Button variant="primary" size="sm">
                    Visit Live
                  </Button>
                </a>
              )}

              {project?.github && (
                <a target="_blank" href={project?.github}>
                  <Button variant="secondary" size="sm">
                    Repository
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-xl p-4 sm:p-6 ring ring-indigo-50 dark:ring-slate-600 bg-white/40 dark:bg-black/20 backdrop-blur-sm">
            {project?.images && project.images.length > 0 ? (
              <div className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
                {project.images.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    alt={`${project?.name} - Image ${idx + 1}`}
                    src={img}
                    className="h-60 w-[95%] sm:w-[90%] flex-none snap-center ring ring-indigo-50 dark:ring-slate-600 rounded-lg object-contain bg-white dark:bg-zinc-800"
                  />
                ))}
              </div>
            ) : (
              <img
                alt={project?.name}
                src={project?.image}
                className="h-60 w-full ring ring-indigo-50 dark:ring-slate-600 rounded-lg object-contain bg-white dark:bg-zinc-800"
              />
            )}

            <p className="opacity-50 text-sm mt-6 mb-3 dark:opacity-100 font-medium">
              Technology Used
            </p>
            <div className="flex flex-wrap gap-2">
              {project?.languagesUsed.map((btn: any, i: any) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="icon"
                  className="bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20"
                >
                  <Image
                    src={btn}
                    alt="icon"
                    width={30}
                    height={30}
                    className="h-5 w-5"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 h-full">
          <article className="rounded-xl p-6 sm:p-8 ring ring-indigo-50 dark:ring-slate-600 h-full bg-white/40 dark:bg-black/20 backdrop-blur-sm">
            <div className="flex items-start sm:gap-8">
              <div className="w-full">
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {project?.tag?.toUpperCase()}
                </strong>

                {/* Removed duplicate title from here since it's now prominently on the left */}

                <div
                  className="mt-6 text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: (project?.detailedDescription as string) || "",
                  }}
                ></div>

                <div className="mt-8">
                  <p className="opacity-50 text-sm mb-2 font-medium">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#50E3C2]"></div>
                    <p className="font-medium">{project?.status}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="opacity-50 text-sm mb-3 font-medium">Features</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {project?.features.map((feature: any, i: any) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-medium text-indigo-500 dark:text-indigo-400">{i + 1}.</span> 
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Page;
