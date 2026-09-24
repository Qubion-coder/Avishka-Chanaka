import React, { useState, useRef } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
  onMusicStart?: () => void;
  readyToTransition?: boolean;
}

export function WelcomeScreen({ onComplete, onMusicStart, readyToTransition = true }: WelcomeScreenProps) {
  const [started, setStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startEntry = () => {
    if (!readyToTransition || started) return;
    
    setStarted(true);
    if (onMusicStart) {
      onMusicStart();
    }
    
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => onComplete(), 500); // Wait for fade out
  };

  return (
    <>
      <style>{`
        .welcome-scene {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease;
        }
        .welcome-scene.is-exiting {
          opacity: 0;
          pointer-events: none;
        }
        .video-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
          pointer-events: auto;
          background: #000;
          cursor: pointer;
        }
        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      <div className={`welcome-scene ${videoEnded ? 'is-exiting' : ''}`}>
        
        <div className="video-container" onClick={startEntry}>
          <video 
            ref={videoRef}
            src="/intro.mp4#t=0.001" 
            playsInline
            muted
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </>
  );
}
