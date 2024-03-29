"use client"
import React from 'react'
import Heading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './Submit-btn'
import toast from 'react-hot-toast'


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
          <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at {" "}
              <a className="underline" href="mailto:sethisanuja1998@gmail.com">sethisanuja1998@gmail.com</a>{" "} or through this form.</p>
          
          <form action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) { 
                  toast.error(error);
                  return;
              }
              toast.success("Email sent sucessfully!")
          }} className='mt-10 flex flex-col dark:text-black'>
              <input type="email" className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your email'
                  name="senderEmail"
                  maxLength={500} required />
              <textarea name="message" id="" className='h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your message'  maxLength={5000} required/>
             <SubmitBtn/>
          </form>
    </motion.section>
  )
}

export default Contact
