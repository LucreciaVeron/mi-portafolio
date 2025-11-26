import React from 'react';
import { myData } from '../data';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      
      {/* Nombre */}
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter hover:text-violet-400 transition">
          {myData.name}<span className="text-violet-400">.</span>
        </a>

        {/* Enlaces */}
        <div className="flex gap-8 items-center"> 
          <a href="#home" className="text-sm font-medium text-neutral-300 hover:text-violet-400 transition">Inicio</a>
          <a href="#projects" className="text-sm font-medium text-neutral-300 hover:text-violet-400 transition">Proyectos</a>
          <a href="#contact" className="text-sm font-medium text-neutral-300 hover:text-violet-400 transition">Contacto</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;