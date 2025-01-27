import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Resume/>
        <Skills />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
