"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function VisionQuotes({ language }: { language: string }) {
  const isHebrew = language === 'he';

  const quotes = isHebrew ? [
    'מאמינה שלכל אדם יש זכות לדירה.',
    'נדל״ן זה קודם כל אמונה, אומץ – ולא כסף.',
    'אדם ללא דירה הוא כמו נשמה ללא גוף.',
    'אם יש לך רצון לדירה – תהיה לך דירה.'
  ] : [
    'I believe everyone has the right to a home.',
    'Real estate is first about faith and courage – not money.',
    'A person without a home is like a soul without a body.',
    'If you have the will for a home – you will have a home.'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F6F0] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
            {isHebrew ? 'החזון שלי' : 'My Vision'}
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 gradient-gold opacity-5 rounded-3xl group-hover:opacity-10 smooth-transition" />
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition hover-lift">
                <Quote className="w-12 h-12 text-[#D4AF37] mb-6 opacity-50" />
                <p className="text-xl md:text-2xl text-[#2C2C2C] font-light leading-relaxed">
                  {quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}