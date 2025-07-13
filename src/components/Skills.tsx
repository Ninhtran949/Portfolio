import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaJava, FaCloud, FaDatabase, FaCogs } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss, SiFirebase, SiSqlite, SiExpress } from "react-icons/si";

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Linux', icon: <FaLinux className="text-gray-800" /> },
  { name: 'Embedded Programming', icon: <FaCogs className="text-blue-800" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'Cloud service', icon: <FaCloud className="text-blue-400" /> },
  { name: 'Sql', icon: <FaDatabase className="text-indigo-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Sqlite', icon: <SiSqlite className="text-blue-400" /> },
  { name: 'UI/UX Design', icon: <FaCogs className="text-gray-500" /> },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.style.opacity = '1';
            headingRef.current.style.transform = 'translateY(0)';
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
  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out opacity-0" style={{
          transform: 'translateY(40px)'
        }}>
          My Skills
        </h2>
        <div className="mb-12">
          <Marquee gradient={false} speed={50} pauseOnHover>
            {skillsData.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center mx-10">
                <div className="text-5xl mb-2 drop-shadow-lg">{skill.icon}</div>
                <span className="font-semibold text-base text-gray-800 dark:text-white tracking-wide uppercase mt-1">
                  {skill.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Problem Solving', 'Team Collaboration', 'Attention to Detail', 'Time Management'].map((skill, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <h3 className="font-medium">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;