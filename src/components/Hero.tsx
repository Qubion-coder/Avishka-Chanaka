import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  return touch;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both', inviteeName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const useParallax = !reducedMotion && !isTouch;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf7]">
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={useParallax ? { y: y1, scale } : undefined}
      >
        <img
          src="/ChatGPT Image Jul 5, 2026h, 02_20_06 AM.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: 'center' }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 mt-4 sm:mt-0">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center w-full gap-4 mb-6 sm:mb-8"
        >
          <div className="w-16 sm:w-24 h-[1px] bg-[#C5A059]/60" />
          <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40" />
          <div className="w-16 sm:w-24 h-[1px] bg-[#C5A059]/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gradient-to-r from-[#fceef0]/90 via-[#ffffff]/90 to-[#fceef0]/90 backdrop-blur-md border border-[#C5A059]/20 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full mb-10 sm:mb-14 shadow-sm"
        >
          <span className="text-[#3a3a3a] font-sans text-[10px] sm:text-[11px] tracking-[0.4em] font-bold uppercase drop-shadow-sm">
            The Celebration of Love
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-1 sm:gap-2 mb-10 sm:mb-16"
        >
          <h1 className="text-[3.5rem] sm:text-7xl font-names text-[#C5A059] tracking-widest drop-shadow-sm leading-none">
            AVISHKA
          </h1>
          <span className="text-4xl sm:text-5xl font-display text-[#C5A059] drop-shadow-sm my-1">
            &
          </span>
          <h1 className="text-[3.5rem] sm:text-7xl font-names text-[#C5A059] tracking-widest drop-shadow-sm leading-none">
            CHANAKA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white/90 backdrop-blur-md border border-[#C5A059]/15 px-6 sm:px-16 py-8 sm:py-10 rounded-[2.5rem] shadow-[0_8px_30px_rgba(197,160,89,0.12)] max-w-[90%] sm:max-w-xl text-center"
        >
          <p className="text-stone-700 font-serif italic text-[1.1rem] sm:text-[1.35rem] leading-relaxed">
            Together with our families, we<br/>
            joyfully invite you to join us
          </p>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="bg-gradient-to-r from-[#fceef0]/90 via-[#ffffff]/90 to-[#fceef0]/90 backdrop-blur-md border border-[#C5A059]/30 px-10 sm:px-12 py-3.5 sm:py-4 rounded-full hover:bg-white transition-all text-[#3a3a3a] font-sans text-[10px] sm:text-[11px] tracking-[0.4em] font-bold uppercase shadow-[0_4px_15px_rgba(0,0,0,0.05)] active:scale-95"
        >
          Discover
        </button>
      </motion.div>
    </div>
  );
};
