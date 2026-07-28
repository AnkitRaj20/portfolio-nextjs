import About from "@/components/About";
// import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
// import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Contact from "@/components/Contact";


import { readContent } from "@/lib/json-cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankit Raj | FullStack Developer & Node.js Specialist",
  description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Node.js, Next.js, and System Architecture.",
};

const page = async () => {
  const content = await readContent();
  const visibleProjects = content?.projects?.filter((p: any) => !p.isHidden) || [];

  return (
    <div>
      {/* <Hero /> */}
      <Hero3 content={content?.hero} />
      <About content={content?.about} projectCount={visibleProjects.length} />
      <Skills skills={content?.skills} />
      <FeaturedProjects projects={visibleProjects} />
      <Contact content={content?.contact} />
    </div>
  );
};

export default page;
