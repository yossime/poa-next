"use client";
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

export default function CitiesShowcase({ language }: { language: string }) {
  const isHebrew = language === 'he';

  const cities = isHebrew ? [
    {
      name: 'נתניה',
      description: 'עיר חופים מרהיבה עם פוטנציאל עצום. פרויקטים חדשים במחירי השקה מיוחדים.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
    },
    {
      name: 'ירושלים',
      description: 'ההון התרבותי והרוחני. השקעה בלב העיר העתיקה והאזורים המתפתחים.',
      image: 'https://images.unsplash.com/photo-1541411735170-8528d194583e?w=800&q=80'
    },
    {
      name: 'תל אביב',
      description: 'הלב הכלכלי של ישראל. דירות יוקרה ופרויקטים ייחודיים במיקומים מבוקשים.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
    },
    {
      name: 'אילת',
      description: 'עיר הנופש של ישראל. השקעה חכמה בנדל״ן תיירותי ומגורים איכותיים.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    },
    {
      name: 'רכסים',
      description: 'אזור מתפתח עם פוטנציאל גבוה. דירות חדשות במחירים משתלמים ואיכות בנייה גבוהה.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    }
  ] : [
    {
      name: 'Netanya',
      description: 'Stunning beach city with immense potential. New projects at special launch prices.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
    },
    {
      name: 'Jerusalem',
      description: 'The cultural and spiritual capital. Investment in the Old City heart and developing areas.',
      image: 'https://images.unsplash.com/photo-1541411735170-8528d194583e?w=800&q=80'
    },
    {
      name: 'Tel Aviv',
      description: 'Israel\'s economic heart. Luxury apartments and unique projects in sought-after locations.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
    },
    {
      name: 'Eilat',
      description: 'Israel\'s resort city. Smart investment in tourist real estate and quality residences.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    },
    {
      name: 'Rakhassim',
      description: 'Developing area with high potential. New apartments at affordable prices and high build quality.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              {isHebrew ? 'מכירות מוקדמות' : 'Pre-Sale Opportunities'}
            </h2>
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isHebrew 
              ? 'מתמחה במכירות מוקדמות במחירי השקה בערים המובילות בישראל' 
              : 'Specializing in pre-sale opportunities at launch prices in Israel\'s leading cities'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl smooth-transition hover-lift bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* City Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    <h3 className="text-3xl font-bold text-white">{city.name}</h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {city.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}