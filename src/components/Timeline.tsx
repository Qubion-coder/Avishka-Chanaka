import React from 'react';
import { motion } from 'motion/react';

const events = [
  { time: '10:15 AM', title: 'Poruwa Ceremony', desc: 'The Sacred Union', icon: '/timeline_poruwa.jpg' },
  { time: '11:00 AM', title: 'Registration', desc: 'Signing the register', icon: '/timeline_registration.jpg' },
  { time: '11:30 AM', title: 'Wedding Toast', desc: 'A toast to the couple', icon: '/timeline_toast.jpg' },
  { time: '12:00 PM', title: 'Wedding Lunch', desc: 'Join us for a feast', icon: '/timeline_lunch.jpg' },
  { time: '02:00 PM', title: 'Dancing Floor', desc: 'Let\'s celebrate!', icon: '/timeline_dancing.jpg' },
  { time: '03:30 PM', title: 'Going Away', desc: 'The grand exit', icon: '/timeline_going_away.jpg' },
];

export const Timeline = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDF9F1] via-[#F9EFEF] to-[#FDF9F1] py-24 sm:py-32 relative overflow-hidden flex justify-center w-full">
      {/* Bottom left corner flower */}
      <img 
        src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
        alt="Floral Corner" 
        className="absolute bottom-0 left-0 w-64 sm:w-96 opacity-80 mix-blend-multiply pointer-events-none z-0 translate-y-20 sm:translate-y-0" 
      />

      <div className="w-full max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top middle flower */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <img 
            src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM.png" 
            alt="Floral Top" 
            className="w-20 sm:w-24 h-auto opacity-80 mix-blend-multiply"
          />
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-names text-[#5C3A41] tracking-wide mb-2">The Day</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full max-w-md mx-auto">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative flex items-center mb-12 last:mb-0 group"
            >
              {/* Time */}
              <div className="w-20 sm:w-24 flex-shrink-0 text-right">
                <span className="font-['Cormorant_Garamond',_serif] text-sm sm:text-base text-[#8A5A63] tracking-widest tabular-nums font-semibold">
                  {event.time}
                </span>
              </div>

              {/* Dot and Line Container */}
              <div className="flex flex-col items-center mx-4 sm:mx-6 relative h-full">
                {/* Line to next item */}
                {idx !== events.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%+3rem)] bg-[#C07C88]/40 group-hover:bg-[#C07C88]/80 transition-colors duration-500" />
                )}
                {/* Icon Image */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white relative z-10 border border-[#C07C88]/40 shadow-[0_4px_15px_rgba(192,124,136,0.15)] flex items-center justify-center p-1 group-hover:border-[#C07C88] group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  <img src={event.icon} className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90" alt={event.title} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond',_serif] text-xl sm:text-2xl text-[#5C3A41] mb-1 font-medium">{event.title}</h3>
                <p className="text-[11px] sm:text-xs text-[#8A5A63]/80 font-sans tracking-wide">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
