import React, { useEffect, useRef } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
const Contact = () => {
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent successfully! ');
  };
  return <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          Get In Touch
        </h2>
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ease-out opacity-0" style={{
        transform: 'translateY(40px)'
      }}>
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello. I'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Hanoi, VietNam</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">Ninhtran949@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+84375227251</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all flex items-center group">
                <span>Send Message</span>
                <SendIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;