import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";


const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Hero2 /> */}
      <Hero3 />
      <About/>
      <Skills />
      <FeaturedProjects />
    
    </div>
  );
};

export default page;
