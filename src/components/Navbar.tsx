import React, { useEffect, useState } from 'react';
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
    // Update active section based on scroll position
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop - 100;
        const bottom = top + element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={e => {
        e.preventDefault();
        scrollToSection('home');
      }} className="text-xl font-bold transition-transform hover:scale-105">
          Portfolio.
        </a>
        <div className="hidden md:flex items-center space-x-12">
          {['home', 'about', 'skills', 'projects', 'contact'].map(item => <a key={item} href={`#${item}`} onClick={e => {
          e.preventDefault();
          scrollToSection(item);
        }} className={`relative text-base font-medium hover:text-black transition-colors ${activeSection === item ? 'text-black' : 'text-gray-600'}`}>
              <span className="capitalize">{item}</span>
              {activeSection === item && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full" />}
            </a>)}
        </div>
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>;
};
export default Navbar;