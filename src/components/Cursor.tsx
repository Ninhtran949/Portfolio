import React, { useEffect, useState } from 'react';
const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
    const onMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const onMouseEnter = () => {
      setHidden(false);
    };
    const onMouseLeave = () => {
      setHidden(true);
    };
    const onMouseDown = () => {
      setClicked(true);
    };
    const onMouseUp = () => {
      setClicked(false);
    };
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    addEventListeners();
    handleLinkHoverEvents();
    return () => {
      removeEventListeners();
    };
  }, []);
  // Don't show custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  return <>
      <div className={`fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} style={{
      transform: `translate(${position.x}px, ${position.y}px)`
    }}>
        <div className={`rounded-full ${clicked ? 'bg-white scale-75' : 'bg-white'} ${linkHovered ? 'scale-150' : ''} transition-transform duration-300 w-6 h-6 -ml-3 -mt-3`}></div>
      </div>
      <div className={`fixed top-0 left-0 pointer-events-none z-50 ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
        <div className={`rounded-full border border-black ${clicked ? 'scale-0' : 'scale-100'} ${linkHovered ? 'scale-150' : ''} transition-transform duration-300 w-8 h-8 -ml-4 -mt-4`}></div>
      </div>
    </>;
};
export default Cursor;