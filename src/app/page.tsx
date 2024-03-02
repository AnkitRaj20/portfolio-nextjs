import About from "@/components/About";
import Darkmode from "@/components/Darkmode";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <Nav />
      </div>
      <Hero />
      <About/>
      <Skills />
    </div>
  );
};

export default page;
