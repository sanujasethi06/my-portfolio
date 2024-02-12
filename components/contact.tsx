"use client"
import React from 'react'
import Heading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'


const Contact = () => {
    const { ref } = useSectionInView("Contact");
  return (
      <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }} >
          <Heading>Contact me</Heading>
          <p className='text-gray-700 -mt-6'>Please contact me directly at {" "}
              <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>{" "} or through this form.</p>
          
          <form action={async (formData) => {
              await sendEmail(formData);
          }} className='mt-10 flex flex-col'>
              <input type="email" className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email'
                  name="senderEmail"
                  maxLength={500} required />
              <textarea name="message" id="" className='h-52 my-3 rounded-lg p-4' placeholder='Your message'  maxLength={5000} required/>
              <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 '>
                  Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{ " "}
              </button>
          </form>
    </motion.section>
  )
}

export default Contact
