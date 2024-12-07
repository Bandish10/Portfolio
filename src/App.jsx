import './App.css';
import Certificates from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
