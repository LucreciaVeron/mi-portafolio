import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { myData } from '../data';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-neutral-950 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950 opacity-50 z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500">
                      {myData.name}
                    </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
          {myData.role}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center">
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-full bg-violet-500 text-neutral-900 font-bold hover:bg-violet-400 transition shadow-lg shadow-violet-500/20">
            Contáctame
          </a>
          
          <a 
            href={myData.resume} 
            download="CV_LucreciaVeron.pdf"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-neutral-600 text-white hover:border-violet-400 hover:text-violet-400 transition flex items-center justify-center gap-2 group"
          >
            <FaFileDownload className="group-hover:animate-bounce" /> Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;