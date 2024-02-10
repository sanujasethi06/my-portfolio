"use client"

import ProfileImg from "@/public/sanuja-kumar.png";
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'


const Intro = () => {
  return (
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
          <div className="flex items-center justify-center">
              <div className="relative">
                  <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          type: "tween",
                          duration:0.2,
                  }}>
                      
                  <Image
                      src={ProfileImg}
                      alt='Sanuja Kumar'
                      width="180"
                      height="180"
                  quality="95"
              priority={true}
                      className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl bg-gray-700" />
                  </motion.div>
                  <motion.span className="text-4xl absolute bottom-0 right-0"
                  initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>👋</motion.span>
              </div>
          </div>
          <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
              <span className="font-bold">Hello, I'm Sanuja.</span> I'm a{" "}
        <span className="font-bold">Frontend developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I'm passionate to
        building <span className="italic">websites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
          </p>
      
    </section>
  )
}

export default Intro;
