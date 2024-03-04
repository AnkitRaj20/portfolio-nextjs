import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";


const page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Skills />
      <FeaturedProjects />
    
    </div>
  );
};

export default page;
