import ProjectGrid from "@/components/ProjectGrid";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { projectlist } from "@/constants/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the fullstack and backend projects built by Ankit Raj.",
};

export default function ProjectsPage() {
  const visibleProjects = projectlist.filter((p) => !p.isHidden);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.2] relative flex justify-center flex-wrap pt-24 pb-8">
      <div>
        <div className="text-center mt-3">
          <div>
            <span className="flex justify-start px-[1.2rem] md:px-[9rem] opacity-70">
              <Link href="../">
                <MdOutlineKeyboardBackspace
                  className="my-[1.3rem] mt-[2rem]"
                  size={25}
                />
              </Link>
            </span>
            <span className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center">
              All Projects
            </span>
          </div>
        </div>

        <ProjectGrid projects={visibleProjects} />
      </div>
    </div>
  );
}
