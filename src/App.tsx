import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import IntroSequence from './components/IntroSequence';
export function App() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-4xl font-bold animate-pulse">
          Loading<span className="animate-bounce inline-block">.</span>
          <span className="animate-bounce inline-block delay-100">.</span>
          <span className="animate-bounce inline-block delay-200">.</span>
        </div>
      </div>;
  }
  return <>
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      <div className={`bg-white min-h-screen w-full ${!showIntro ? 'animate-fadeIn' : ''}`}>
        <Cursor />
        <Navbar />
        <SocialSidebar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>;
}