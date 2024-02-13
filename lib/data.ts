import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FirstProjImg from "@/public/game-hub.png";
import SecondProjImg from "@/public/gallery.png";
import ThirdProjImg from "@/public/Ai-summarize.png";
import FourthProjImg from "@/public/uber.png";
import FifthProjImg from "@/public/youtube-clone.png";
import SixthProjImg from "@/public/weather.png";




// export const profileImg = [{
//   imageUrl: ProfileImg,
// }] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Berhampur, Odisha ,IN",
    description:
      "Transitioned from electronics engineering to IT, embracing innovation and growth in software development and technology solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
  },
  {
    title: "Web Application Developer",
    location: "Bangalore, Karnataka ,IN",
    description:
      "I'm a web developer working as full-time for last 2.5 years. My stack includes HTML,CSS,React, Javascript,Next.js,jQuery, Tailwind,PHP,MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "React Developer",
    location: "Bangalore, Karnataka ,IN",
    description:
      "I worked as a front-end developer for 7 months. I am also upskilling to the MERN full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Game Sphare Hub",
    description:
      "Sleek React.js game hub UI for immersive gaming. Explore a vast game collection, connect with gamers, and enjoy customizable profiles and real-time features. ",
    tags: ["React", "Bootstrap","HTML", "CSS3","JavaScript"],
    imageUrl: FirstProjImg,
  },
  {
    title: "Gallery Gleam",
    description:
      "A comprehensive image gallery app with favorites, image uploads, and album organization, enabling seamless photo management. ",
    tags: ["HTML", "CSS3","React", "Next.js","TypeScript", "Tailwind", "Cloudinary"],
    imageUrl: SecondProjImg,
  },
  {
    title: "AI article summarizer",
    description:
      "AI article summarizer app condensing articles efficiently, providing concise summaries for streamlined reading and information retrieval.",
    tags: ["HTML", "CSS3","Javascript","React", "Next.js", "Tailwind",],
    imageUrl: ThirdProjImg,
  },
  {
    title: "Uber Clone",
    description:
      "Uber clone app featuring ride-hailing, real-time tracking, payment integration, and driver-partner features, providing convenient transportation services for users.",
    tags: ["React", "Next.js", "Google Auth", "Tailwind","Google Place API"],
    imageUrl: FourthProjImg,
  },
  {
    title: "Youtube Clone",
    description:
      "YouTube clone app with video search, playlists, category, and personalized recommendations, offering a seamless video-sharing experience for users.",
    tags: ["HTML", "CSS3","React", "Javascript", "Mui", "React Context", "YouTube API"],
    imageUrl: FifthProjImg,
  },
  {
    title: "Weather Forecast App",
    description:"This weather app provides up-to-date information on temperature, humidity, wind speed, pressure, and visibility for a given location. ",
    tags: ["HTML", "CSS3","React", "Javascript", "Weather API", "Tailwind"],
    imageUrl: SixthProjImg
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "SQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
