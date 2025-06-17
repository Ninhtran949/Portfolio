import React from 'react';
import { FacebookIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Portfolio.</h2>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://github.com/Ninhtran949" className="hover:text-gray-300 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;