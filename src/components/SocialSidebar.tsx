import React, { useState } from 'react';
import { FacebookIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
const SocialSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const socialLinks = [{
    id: 'instagram',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/baoninh.tran.9'
  }, {
    id: 'linkedin',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/ninh-trần-67ba83212/'
  }, {
    id: 'github',
    icon: GithubIcon,
    url: 'https://github.com/Ninhtran949'
  }];
  return <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-8">
        {socialLinks.map(social => {
        const Icon = social.icon;
        return <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group" onMouseEnter={() => setHoveredIcon(social.id)} onMouseLeave={() => setHoveredIcon(null)} style={{
          transform: hoveredIcon === social.id ? 'rotate(360deg)' : 'rotate(0deg)',
          transition: 'transform 0.5s ease-in-out'
        }}>
              <Icon className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
            </a>;
      })}
      </div>
    </div>;
};
export default SocialSidebar;