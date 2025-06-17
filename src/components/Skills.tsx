import React, { useEffect, useRef } from 'react';
const skillsData = [{
  name: 'HTML',
  level: 95
}, {
  name: 'CSS',
  level: 90
}, {
  name: 'JavaScript',
  level: 85
}, {
  name: 'React',
  level: 88
}, {
  name: 'TypeScript',
  level: 80
}, {
  name: 'Tailwind CSS',
  level: 92
}, {
  name: 'UI/UX Design',
  level: 75
}, {
  name: 'Git',
  level: 85
}];
const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.style.opacity = '1';
            headingRef.current.style.transform = 'translateY(0)';
          }
          if (skillsRef.current) {
            setTimeout(() => {
              skillsRef.current!.style.opacity = '1';
              skillsRef.current!.style.transform = 'translateY(0)';
              // Animate progress bars
              const progressBars = document.querySelectorAll('.progress-bar');
              progressBars.forEach((bar, index) => {
                setTimeout(() => {
                  ;
                  (bar as HTMLElement).style.width = `${skillsData[index].level}%`;
                }, 100 * index);
              });
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
  return <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          My Skills
        </h2>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          {skillsData.map((skill, index) => <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress-bar h-full bg-black rounded-full transition-all duration-1000 ease-out" style={{
              width: '0%'
            }}></div>
              </div>
            </div>)}
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Problem Solving', 'Team Collaboration', 'Attention to Detail', 'Time Management'].map((skill, index) => <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <h3 className="font-medium">{skill}</h3>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;