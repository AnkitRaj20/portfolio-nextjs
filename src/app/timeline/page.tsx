"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";

import React from "react";
// import AnimatedDiv from "./AnimatedDiv";
import { Education } from "@/constants/education";
import { useTheme } from "next-themes";
const Timeline = () => {
    const theme = useTheme();
    console.log(theme)
  return (
    
    <div>
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase text-center mt-4">
          TimeLine
        </h2>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center py-8 ">
          Education and Experiences
        </p>
      <VerticalTimeline
        className="opacity-95"
        animate={true}
        lineColor= {theme.theme === 'light' ? "#262626" : "#ffffff"}

      >
        {Education.map((e, i) => (
          <VerticalTimelineElement
         
            key={i}
            visible={true}
            className="vertical-timeline-element--work"
            date={e.Date}
            contentStyle={{ background: e.type === "education" ? "#F11A7B":"#387ADF", color: theme.theme === 'light' ? "#262626" : "#ffffff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${e.type === "education" ? "#F11A7B":"#387ADF"}` }}
            iconStyle={{background: e.type === "education" ? "#F11A7B":"#387ADF", color: "#fff" }}
            icon={ e.type === "education" ? <MdSchool /> :  <MdWork /> }
          >
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.location}</h4>
            <p>{e.School}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
