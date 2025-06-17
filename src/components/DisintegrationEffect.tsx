import React, { useEffect, useRef } from 'react';
interface DisintegrationEffectProps {
  onAnimationComplete: () => void;
}
const DisintegrationEffect: React.FC<DisintegrationEffectProps> = ({
  onAnimationComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Create particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];
    // Initialize particles
    for (let i = 0; i < 2000; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 8,
        speedY: (Math.random() - 0.5) * 8,
        alpha: 1
      });
    }
    let frame = 0;
    const totalFrames = 120; // 2 seconds at 60fps
    // Animation function
    function animate() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.alpha = Math.max(0, 1 - frame / totalFrames);
        ctx.beginPath();
        ctx.fillStyle = `rgba(128, 128, 128, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        onAnimationComplete();
      }
    }
    animate();
    // Cleanup
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [onAnimationComplete]);
  return <canvas ref={canvasRef} className="fixed inset-0 z-[55] pointer-events-none" style={{
    background: 'transparent'
  }} />;
};
export default DisintegrationEffect;