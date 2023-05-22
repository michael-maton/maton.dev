'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience';

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth'
    >
      <h3 className='top-24 uppercase text-xl tracking-[8px] md:tracking-[20px] text-gray-500 md:text-2xl pt-24'>
        Work Experience
      </h3>

      <div
        className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]-80'
      >
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </motion.div>
  );
}

export default Work;
