// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from './sections/Hero'
import Bio from './sections/Bio'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contacts from './sections/Contacts'
import './App.css'
import NavDots from './components/layout/NavDots'
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeights = [0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 3, window.innerHeight * 4];
      const newSection = sectionHeights.findIndex(h => scrollY < h) - 1;
      setActiveSection(newSection >= 0 ? newSection : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div>
      <div className="bg-shape"></div>
      <div className="bg-shape"></div>
      <div className="bg-shape"></div>
      <NavDots activeSection={activeSection} sections={5} />
      <div className="sections-container">
        <Hero />
        <Bio />
        <Experience />
        <Skills />
        <Contacts />
      </div>
    </div>
  )
}


// ---------------- Particle Background Animation ----------------
function createParticle(): void {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'rgba(255, 255, 255, 0.6)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  // Position the particle at the bottom edge of the current viewport, regardless of scroll position
  particle.style.top = `${window.scrollY + window.innerHeight}px`;
  particle.style.animation = 'particleFloat 8s linear forwards';

  document.body.appendChild(particle);

  // Remove the particle once its animation finishes
  setTimeout(() => {
    particle.remove();
  }, 8000);
}

// Inject animation keyframes into the document once
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  /* Float the particle up by the full viewport height plus an extra 100px */
  @keyframes particleFloat {
    to {
      transform: translateY(calc(-100vh - 100px));
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyle);

// Spawn a new particle every 500 ms
setInterval(createParticle, 500);


export default App
