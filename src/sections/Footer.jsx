/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowUp, FaCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center item-center gap-2 p-5">
        <FaCopyright className='fill-yellow-500 lg:size-5 size-8' />
        <p className="text-lg text-center">
          Copyright 2024, Prime CONSTRUCTION, All Rigths Reserved
        </p>
      </div>

      {/* scroll to top button */}
      <div className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <a href="#hero" className="spy={true} offset={-100} smooth={true}">
          <FaArrowUp className='size-6' />
        </a>
      </div>
    </>
  )
}

export default Footer
