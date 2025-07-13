import React, { useEffect, useRef } from 'react';
import { CodeIcon, BrainIcon, HeartIcon } from 'lucide-react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.style.opacity = '1';
            headingRef.current.style.transform = 'translateY(0)';
          }
          if (contentRef.current) {
            setTimeout(() => {
              contentRef.current!.style.opacity = '1';
              contentRef.current!.style.transform = 'translateY(0)';
            }, 300);
          }
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          About Me
        </h2>
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <CodeIcon className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Web & app development</h3>
            <p className="text-gray-600">
              I specialize in creating responsive, interactive websites with
              clean and efficient code. My focus is on delivering exceptional
              user experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <BrainIcon className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Problem Solving</h3>
            <p className="text-gray-600">
              I enjoy tackling complex challenges and finding elegant solutions.
              My analytical thinking helps me break down problems into
              manageable parts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
              <HeartIcon className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Passionate Learner</h3>
            <p className="text-gray-600">
              I'm constantly expanding my knowledge and skills. The tech world
              evolves quickly, and I'm committed to growing with it.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src="/public/e03c8553-34d6-43e7-89c5-5f209d2886de-removebg-preview.png" alt="About Me" className="rounded-xl shadow-md w-full h-auto" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                As a backend programmer in Hanoi, I have spent a few years to cultivate the skills of creating beautiful and practical web & apps. My web development and application journey starts with the curiosity about the way the operation of mobile applications and gradually develops into a passion to create digital experiences to satisfy users.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in modern MERN Stack, focusing strongly on creating web applications that meet, accessible and high performance. I also have a passion for embedded programming and have completed a few simple products, which helps me better understand how the movement works.
              </p>
              <p className="text-gray-600">
                When not writing code, you can see that I am exploring new technologies, contributing to open source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;