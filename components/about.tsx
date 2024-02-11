"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
    const { ref } = useSectionInView("About");
  return (
      <motion.section
          
    ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        I'm a <span className="font-medium"> Front-end Developer </span>, with a background in electronics and communication engineering.{" "}
        Transitioning from my engineering degree, I found my passion for coding and delved into front-end development. Fueled by curiosity and a drive to craft impactful digital experiences, I <span className="underline">bring a unique blend of problem-solving skills and analytical thinking </span> to my projects.{" "}
        
      </p>
          <p className="mb-3">
              Specializing in <span className="font-medium">HTML, CSS, and JavaScript,ReactJS and NextJS. </span> I focus on creating intuitive and visually appealing user interfaces. I thrive on the creative process of transforming ideas into engaging digital solutions that seamlessly blend form and function.</p>
          <p>
              I am also familiar with  <span className="font-medium">TypeScript and NodeJS</span> . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
        <span className="italic">Outside of coding,</span>I enjoy <span className="underline">staying updated on the latest trends in web development</span>, experimenting with new frameworks, and expanding my skill set.With a commitment to innovation,{" "} Let's collaborate and create remarkable digital experiences together!
        
          </p> 
      
    </motion.section>
  )
}

export default About
