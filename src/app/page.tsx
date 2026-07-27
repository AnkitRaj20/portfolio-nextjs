import About from "@/components/About";
// import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
// import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Contact from "@/components/Contact";


import { readContent } from "@/lib/json-cms";

const page = async () => {
  const content = await readContent();

  return (
    <div>
      {/* <Hero /> */}
      {/* <Hero2 /> */}
      <Hero3 content={content?.hero} />
      <About content={content?.about} />
      <Skills skills={content?.skills} />
      <FeaturedProjects projects={content?.projects} />
      <Contact content={content?.contact} />
    </div>
  );
};

export default page;
