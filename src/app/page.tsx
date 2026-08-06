import About from "@/components/About";
import Skills from "@/components/Skills";
import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero3 from "@/components/Hero3";
import Contact from "@/components/Contact";
import { heroContent, aboutContent, contactContent, MySkills } from "@/constants";
import { projectlist } from "@/constants/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankit Raj | FullStack Developer & Node.js Specialist",
  description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Node.js, Next.js, and System Architecture.",
};

export default function Home() {
  const visibleProjects = projectlist.filter((p) => !p.isHidden);

  return (
    <main>
      <Hero3 content={heroContent} />
      <About content={aboutContent} projectCount={visibleProjects.length} />
      <Skills skills={MySkills} />
      <FeaturedProjects projects={visibleProjects} />
      <Contact content={contactContent} />
    </main>
  );
}
