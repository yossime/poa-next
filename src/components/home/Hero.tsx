"use client";
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero({ language }: { language: string }) {
  const isHebrew = language === 'he';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Animated Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full gradient-gold blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full gradient-gold blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {isHebrew ? (
              <>
                <span className="block">פועה</span>
                <span className="text-gradient block mt-2">משווקת נדל״ן</span>
              </>
            ) : (
              <>
                <span className="block">Poa</span>
                <span className="text-gradient block mt-2">Real Estate</span>
              </>
            )}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          {isHebrew 
            ? 'משווקת נדל״ן בכל הארץ' 
            : 'Nationwide Real Estate Marketing'}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-xl text-[#D4AF37] mb-12 max-w-2xl mx-auto font-light"
        >
          {isHebrew 
            ? 'מתמחה במכירות מוקדמות במחירי השקה' 
            : 'Specializing in Pre-Sale Opportunities at Launch Prices'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-5 gradient-gold text-white text-lg font-semibold rounded-full hover:shadow-2xl smooth-transition hover-lift"
          >
            {isHebrew ? 'אני רוצה למצוא דירה' : 'Find My Home'}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-8 h-8 text-white opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}