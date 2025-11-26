import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen selection:bg-violet-500 selection:text-neutral-900">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;