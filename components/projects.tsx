"use client"
import React, { useEffect } from 'react'
import Heading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
const Projects = () => {
    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSectionContext();
    useEffect(() => {
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection]);
    
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
          <Heading>My projects</Heading>
          <div>
              {projectsData.map((project, index) => (
                  <React.Fragment key={index}>
                      <Project {...project} />
                  </React.Fragment>
              ))}
          </div>
    </section>
  )
}


export default Projects

