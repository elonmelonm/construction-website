/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
        <motion.h1
          variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>
          Prime construction 
        </motion.h1>
        <div className="w-[120px] h-6px bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Sed a dignissimos quo eaque eius aut facilis voluptate dolorum beatae, optio quis. Illo tenetur magnam amet impedit, 
          obcaecati tempora voluptatem iste.
        </p>
      </motion.div>
      <motion.div className="lg:[40%] w-full flex flex-col justify-center items-start gap-6">
        <p className='text-white text-lg text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni tempora maiores rerum itaque vitae ea repudiandae, 
          minus aut, officiis, est numquam commodi veniam vero aliquid non nisi facilis. Ipsum repudiandae minima quae repellendus, blanditiis 
          facilis voluptas ea consequatur? Ab eligendi cum, voluptatum asperiores veritatis, deleniti iusto et perferendis, placeat inventore unde. 
          Similique aliquid aut suscipit amet magnam enim quis voluptates repellendus, numquam accusamus facere vitae, voluptatem laboriosam ullam saepe. 
          Qui possimus, dolores ullam excepturi odit magni temporibus modi! Distinctio pariatur iste voluptate officiis corporis et minima, quidem odit quisquam 
          vel amet porro ullam officia eligendi corrupti. Nulla, illo doloremque!
        </p>
        <motion.button
          variants={zoomInVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'>
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About
