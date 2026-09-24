import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Send, Sparkles } from 'lucide-react';

export const BestWishes = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    // Construct WhatsApp message (optional, but requested by standard workflow for wishes/rsvp)
    const waMessage = `*Best Wishes for Chanaka & Avishka* ❤️\n\n*From:* ${name}\n\n*Message:*\n${message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/94707819074?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-brand-lavender/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Sparkles className="w-4 h-4 text-brand-plum animate-pulse" />
          <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-bold drop-shadow-sm">
            Guestbook
          </span>
          <Sparkles className="w-4 h-4 text-brand-plum animate-pulse" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-names text-stone-800 mb-6 drop-shadow-sm">
          Best <span className="italic font-light text-brand-plum">Wishes</span>
        </h2>
        <p className="text-stone-500/90 font-serif text-lg max-w-xl mx-auto">
          Leave a message for the couple as they embark on this beautiful journey together.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-brand-lavender/30 shadow-[0_20px_50px_rgba(176,137,104,0.1)] relative z-10"
      >
        {submitted ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-brand-plum mx-auto mb-6 fill-brand-plum/20 animate-pulse" />
            <h3 className="text-2xl font-serif text-stone-800 mb-4">Thank you for your wishes!</h3>
            <p className="text-stone-500 font-sans text-sm">Your message means the world to us.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 pl-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-[#fcfaf7] px-6 py-4 rounded-full border border-stone-200 focus:ring-2 focus:ring-brand-lavender/50 focus:border-brand-plum/50 outline-none transition-all font-serif text-lg text-stone-800 placeholder:text-stone-400"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 pl-2">
                Your Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wishes for the couple..."
                rows={4}
                className="w-full bg-[#fcfaf7] px-6 py-4 rounded-[2rem] border border-stone-200 focus:ring-2 focus:ring-brand-lavender/50 focus:border-brand-plum/50 outline-none transition-all font-serif text-lg text-stone-800 placeholder:text-stone-400 resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-stone-800 text-brand-rose py-4 sm:py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[10px] sm:text-xs uppercase hover:bg-stone-900 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 mt-4 group"
            >
              Send Wishes
              <Send className="w-4 h-4 text-brand-plum group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
