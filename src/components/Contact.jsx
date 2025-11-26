import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { myData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Contacto</h2>
        <p className="text-neutral-400 mb-10 text-lg">
          Estoy buscando activamente oportunidades para unirme a un equipo de desarrollo 
          y seguir creciendo profesionalmente. Si mi perfil encaja con lo que buscas, 
          ¡no dudes en contactarme!
        </p>
        
        <div className="flex justify-center gap-8 text-4xl">
          <a href={myData.socials.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white hover:scale-110 transition duration-300">
            <FaGithub />
          </a>
          <a href={myData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#0077b5] hover:scale-110 transition duration-300">
            <FaLinkedin />
          </a>
          <a href={myData.socials.email} className="text-neutral-400 hover:text-violet-400 hover:scale-110 transition duration-300">
            <FaEnvelope />
          </a>
        </div>

        <footer className="mt-20 text-neutral-600 text-sm">
          © {new Date().getFullYear()} {myData.name}. Hecho con React & Tailwind.
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;