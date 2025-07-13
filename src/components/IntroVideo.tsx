import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface IntroVideoProps {
  onVideoEnd: () => void;
}

const IntroVideo: React.FC<IntroVideoProps> = ({
  onVideoEnd
}) => {
  const [isMuted, setIsMuted] = useState(true); // Bắt đầu muted để đảm bảo autoplay
  const [showUnmuteHint, setShowUnmuteHint] = useState(true);

  // Tự động hiện gợi ý unmute sau 1 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUnmuteHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    setShowUnmuteHint(false);
  };

  return (
    <div className="fixed inset-0 bg-black z-[60] overflow-hidden">
      <ReactPlayer 
        url="/public/I Am Iron Man Snap Scene - AVENGERS 4： ENDGAME (2019) Movie Clip (1)(1) (online-video-cutter.com).mp4"
        playing 
        muted={isMuted}
        width="100%"
        height="100%"
        onEnded={onVideoEnd}
        playsinline={true}
        controls={false}
        config={{
          file: {
            attributes: {
              autoPlay: true,
              muted: isMuted,
              playsInline: true,
              preload: 'auto'
            }
          }
        }} 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
      
      {/* Nút mute/unmute với animation */}
      <button 
        onClick={handleToggleMute}
        className={`absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10 ${
          showUnmuteHint ? 'animate-pulse ring-2 ring-white/50' : ''
        }`}
        title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Gợi ý unmute */}
      {showUnmuteHint && isMuted && (
        <div className="absolute top-16 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm z-10 animate-fade-in">
          Nhấn để bật âm thanh
        </div>
      )}
    </div>
  );
};

export default IntroVideo;
