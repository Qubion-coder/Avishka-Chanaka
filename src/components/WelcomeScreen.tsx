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
    if (!readyToTransition) return;
    
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
          background: #fdfaf7;
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
          opacity: 0;
          transition: opacity 1s ease;
          pointer-events: none;
          background: #000;
        }
        .video-container.is-playing {
          opacity: 1;
          pointer-events: auto;
        }
        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .play-button {
          padding: 16px 32px;
          border: 1px solid rgba(197, 160, 89, 0.6);
          background: rgba(255, 255, 255, 0.8);
          color: #2A2A2A;
          font-size: 16px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 30px;
          font-family: "Inter", sans-serif;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
          z-index: 10;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .play-button:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197,160,89,0.15);
        }
        .play-button.is-hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
        }
        .play-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
      <div className={`welcome-scene ${videoEnded ? 'is-exiting' : ''}`}>
        
        <div className={`video-container ${started ? 'is-playing' : ''}`}>
          <video 
            ref={videoRef}
            src="/intro.mp4" 
            playsInline
            muted
            onEnded={handleVideoEnd}
          />
        </div>

        <button 
          className={`play-button ${started ? 'is-hidden' : ''}`}
          onClick={startEntry}
          disabled={!readyToTransition}
        >
          {readyToTransition ? "Click to View Invitation" : "Loading..."}
        </button>
      </div>
    </>
  );
}
