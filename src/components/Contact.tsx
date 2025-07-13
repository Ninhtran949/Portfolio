import React, { useEffect, useRef, useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon,PartyPopper } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_knbz1nl'; // Thay bằng serviceId của bạn
const TEMPLATE_ID = 'template_fe4ixqa'; // Thay bằng templateId của bạn
const PUBLIC_KEY = 'QdYUbqFlhiZ4HF0uU'; // Thay bằng public key của bạn

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
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
    setSending(true);
    setSuccess(null);
    if (!formRef.current) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSuccess('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => setSuccess('Failed to send message!'))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20">
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
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Tan Trieu, Thanh tri, Hanoi, VietNam</p>
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input name="name" type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input name="email" type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                </div>
              </div>
              <div>
                <label htmlFor="title" className="block mb-2 font-medium">Subject</label>
                <input name="title" type="text" id="title" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea name="message" id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required></textarea>
              </div>
              <button type="submit" disabled={sending} className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all flex items-center group disabled:opacity-60 disabled:cursor-not-allowed">
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                <SendIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {success && success.includes('success') && (
                <div className="mt-4 flex items-center justify-center">
                  {/* <div className="relative px-6 py-4 bg-gradient-to-r from-blue-900 via-gray-800 to-blue-600 text-white rounded-xl shadow-lg border border-blue-700 flex items-center gap-3 animate-pulse">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-glow">
                      <rect x="3" y="11" width="18" height="10" rx="2" fill="#1e293b" stroke="#60a5fa"/>
                      <rect x="7" y="7" width="10" height="4" rx="1" fill="#334155" stroke="#60a5fa"/>
                      <circle cx="12" cy="16" r="2" fill="#60a5fa" />
                      <rect x="10" y="19" width="4" height="2" rx="1" fill="#60a5fa" />
                    </svg> */}
                    <div className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all flex items-center group disabled:opacity-60 disabled:cursor-not-allowed">
                    <span >Thanks for contacting me, I will answer you as soon as possible</span>
                    <PartyPopper className ='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transfor' />
                  </div>
                  </div>

                // </div>
              )}
              {success && !success.includes('success') && (
                <div className="mt-4 flex items-center justify-center">
                  <div className="px-6 py-4 bg-gradient-to-r from-red-900 via-gray-800 to-red-600 text-white rounded-xl shadow-lg border border-red-700 flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <circle cx="12" cy="12" r="10" stroke="#f87171" fill="#1e293b"/>
                      <line x1="15" y1="9" x2="9" y2="15" stroke="#f87171"/>
                      <line x1="9" y1="9" x2="15" y2="15" stroke="#f87171"/>
                    </svg>
                    <span className="font-semibold text-lg tracking-wide">{success}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;