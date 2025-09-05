import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
//    import Projects from './components/projects';
import Projects from './components/projects';
 import Footer from './components/footer';  
import Skills from './components/skills';
function App() {
  return (
    <div> 
      <Navbar /> 
      <Home /> 
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Footer />
   </div>
  );
}

export default App;
