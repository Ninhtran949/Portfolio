import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const projectsData = [{
  "id": 1,
  "title": "Admin Bookify Website",
  "description": "Admin page for book selling system, built with traditional HTML, CSS, JavaScript. Supports book management, catalogs, orders and inventory statistics.",
  "image": "/admin.png",
  "tags": [
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
  ],
  "link": "",
  "github": "https://github.com/Ninhtran949/QLSach"
}, {
  id: 2,
  title: 'Bookify Website',
  description: 'A responsive web bookstore for end users, featuring user authentication, book catalog, shopping cart, order management, and modern UI built with React and TypeScript.',
  image: '/webuser.png',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  link: 'https://bookifynt.vercel.app',
  github: 'https://github.com/Ninhtran949/WebUser'
}, {
  id: 3,
  title: 'Portfolio Website',
  description: 'A personal portfolio website with smooth animations and interactive elements',
  image: '/prrtfolio.png',
  tags: ['React', 'Tailwind CSS', 'TypeScript'],
  link: '',
  github: 'https://github.com/Ninhtran949/Portfolio'
}, {
  id: 4,
  title: 'Bookify Application',
  description: 'A modern bookstore application with a sleek UI and real-time data fetching',
  image: '/appuser.png',
  tags: ['Java', 'MongoDB', 'Express', 'Node.js', 'mongoose','XML'],
  link: '',
  github: 'https://github.com/Ninhtran949/Book-store-app'
}, {
  id: 5,
  title: 'Expense Management Application',
  description: 'Monthly expense planning and management app. Track spent bills.',
  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  tags: ['Java', , 'Firebase', 'Sqlite'],
  link: '',
  github: 'https://github.com/Ninhtran949/ArQLCT'
}];


const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.style.opacity = '1';
            headingRef.current.style.transform = 'translateY(0)';
          }
          if (projectsRef.current) {
            setTimeout(() => {
              projectsRef.current!.style.opacity = '1';
              projectsRef.current!.style.transform = 'translateY(0)';
              // Animate project cards
              const projectCards = document.querySelectorAll('.project-card');
              projectCards.forEach((card, index) => {
                setTimeout(() => {
                  ;
                  (card as HTMLElement).style.opacity = '1';
                  (card as HTMLElement).style.transform = 'translateY(0)';
                }, 150 * index);
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
  return <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          My Projects
        </h2>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          {projectsData.map((project, index) => <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all opacity-0" style={{
          transform: 'translateY(40px)'
        }} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)}>
              <div className="relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
                {activeProject === project.id && <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 animate-fadeIn">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all">
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    ) : (
                      <button 
                        onClick={() => navigate('/404')} 
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                      </button>
                    )}
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    ) : (
                      <button 
                        onClick={() => navigate('/404')} 
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;
