import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FirstProjImg from "@/public/project-dummy1.png";
import SecondProjImg from "@/public/project-dummy2.png";
import ThirdProjImg from "@/public/project-dummy3.png";


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
    title: "Web Application Developer",
    location: "Bangalore, Karnataka ,IN",
    description:
      "I'm a web developer working as full-time for last 2.5 years. My stack includes React, Next.js,jQuery, Tailwind,PHP,MySQL. I'm open to full-time opportunities.",
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
      "Sleek React.js game hub UI for immersive gaming. Explore a vast game collection, connect with gamers, and enjoy customizable profiles and real-time features. Elevate your gaming with our dynamic and visually stunning design.",
    tags: ["React", "Bootstrap","HTML", "CSS3","JavaScript"],
    imageUrl: FirstProjImg,
  },
  {
    title: "Gallery Gleam",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo fugit nesciunt alias architecto voluptatum, autem libero earum temporibus quia officia obcaecati placeat ipsa, quasi eum soluta nobis. ",
    tags: ["HTML", "CSS3","React", "TypeScript", "Next.js", "Tailwind", "Cloudinary","Shadcn"],
    imageUrl: SecondProjImg,
  },
  {
    title: "AI article summarizer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo fugit nesciunt alias architecto voluptatum, autem libero earum temporibus quia officia obcaecati placeat ipsa, quasi eum soluta nobis.",
    tags: ["HTML", "CSS3","Javascript","React", "Next.js", "Tailwind",],
    imageUrl: ThirdProjImg,
  },
  {
    title: "Uber Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo fugit nesciunt alias architecto voluptatum, autem libero earum temporibus quia officia obcaecati placeat ipsa, quasi eum soluta nobis.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ThirdProjImg,
  },
  {
    title: "Youtube Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo fugit nesciunt alias architecto voluptatum, autem libero earum temporibus quia officia obcaecati placeat ipsa, quasi eum soluta nobis.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ThirdProjImg,
  },
  {
    title: "Weather Forecast App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo fugit nesciunt alias architecto voluptatum, autem libero earum temporibus quia officia obcaecati placeat ipsa, quasi eum soluta nobis.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ThirdProjImg,
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
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;