/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
          <motion.h1
            variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            CONTACT
          </motion.h1>
          <motion.h1
            variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold'>
            REACH US FOR ANY QUERY 
          </motion.h1>
          <div className="w-[120px] h-6px bg-yellow-500"></div>
          <p className="text-3xl italic text-gray-600 mt-[60px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed a dignissimos quo eaque eius aut facilis voluptate dolorum beatae, optio quis. Illo tenetur magnam amet impedit, 
            obcaecati tempora voluptatem iste.</p>
        </motion.div>
        <motion.div className="lg:[40%] w-full flex flex-col justify-center items-start gap-6">
          <motion.form 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'>
              <input type="text" placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type="email" placeholder='Enter Email' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type="number" placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <textarea name="" placeholder='Enter your message' cols="30" id='' rows="4" className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'></textarea>
            <motion.button 
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'>
              SUBMIT
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact