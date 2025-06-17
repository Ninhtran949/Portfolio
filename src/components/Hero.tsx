import React, { useEffect, useRef } from 'react';
const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    if (heading && text && image) {
      heading.style.opacity = '0';
      text.style.opacity = '0';
      image.style.opacity = '0';
      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
      setTimeout(() => {
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 600);
      setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'translateX(0)';
      }, 900);
    }
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start pt-20 lg:pt-0">
            <div className="space-y-6">
              <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-700 ease-out" style={{
              transform: 'translateY(40px)'
            }}>
                Hello I'm Ninh{' '}
                <div className="inline-block animate-wave h-12 w-12 ml-2" />
              </h1>
              <div className="flex items-center gap-4"> 
              <div className="h-1 w-16 bg-black"></div>
              <h2 className="text-2xl font-medium">BackEnd Developer</h2>
              </div>
              <p ref={textRef} className="text-lg text-gray-600 max-w-xl transition-all duration-700 ease-out" style={{
              transform: 'translateY(40px)'
            }}>
                I'm BackEnd Developer based in Hanoi, and I'm very
                passionate and dedicated to my work.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                  Contact Info
                </button>
                <button className="border-2 border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all flex items-center gap-3 hover:scale-105 active:scale-95">
                  <span>Download CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="relative transition-all duration-700 ease-out order-first lg:order-last" style={{
          transform: 'translateX(40px)'
        }}>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gray-50 rounded-full"></div>
            <img src="/e03c8553-34d6-43e7-89c5-5f209d2886de.jpg" alt="Profile" className="w-full max-w-sm mx-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;