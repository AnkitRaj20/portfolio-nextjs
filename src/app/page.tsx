import About from "@/components/About";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero3 from "@/components/Hero3";


const page = () => {
  return (
    <div>
      <Hero3 />
      <About/>
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default page;
