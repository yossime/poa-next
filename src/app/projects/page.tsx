"use client";
import { motion } from 'framer-motion';
import { MapPin, Home, DollarSign, Calendar } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function Projects({ language = 'he' }) {
  const isHebrew = language === 'he';

  const projects = isHebrew ? [
    {
      name: 'פרויקט גלים - נתניה',
      location: 'נתניה, קו ראשון לים',
      type: '3-5 חדרים',
      price: 'החל מ-₪1,850,000',
      completion: 'מסירה: 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      description: 'פרויקט יוקרה עם נוף לים, חדר כושר ובריכה. מחיר השקה מיוחד!'
    },
    {
      name: 'מגדל דוד - ירושלים',
      location: 'ירושלים, קרית היובל',
      type: '2-4 חדרים',
      price: 'החל מ-₪1,650,000',
      completion: 'מסירה: 2025',
      image: 'https://images.unsplash.com/photo-1541411735170-8528d194583e?w=800&q=80',
      description: 'דירות מודרניות באזור מבוקש, קרוב לתחבורה ציבורית ושירותים.'
    },
    {
      name: 'רוטשילד 360 - תל אביב',
      location: 'תל אביב, רחוב רוטשילד',
      type: '3-4 חדרים',
      price: 'החל מ-₪3,200,000',
      completion: 'מסירה: 2026',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      description: 'דירות יוקרה במיקום פרימיום, עיצוב אדריכלי מיוחד.'
    },
    {
      name: 'אילת מרינה - אילת',
      location: 'אילת, מתחם המרינה',
      type: '2-3 חדרים',
      price: 'החל מ-₪1,450,000',
      completion: 'מסירה: 2025',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'דירות נופש יוקרתיות עם נוף לים האדום, פוטנציאל השקעה גבוה.'
    },
    {
      name: 'רכסים גרין - רכסים',
      location: 'רכסים, מרכז היישוב',
      type: '4-5 חדרים + גינה',
      price: 'החל מ-₪1,350,000',
      completion: 'מסירה: 2025',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'בתים צמודי קרקע באזור ירוק ושקט, מחיר משתלם במיוחד.'
    },
    {
      name: 'סנטר טאוור - תל אביב',
      location: 'תל אביב, מרכז העיר',
      type: '2-4 חדרים',
      price: 'החל מ-₪2,850,000',
      completion: 'מסירה: 2026',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'מגדל משרדים ומגורים משולב, במיקום מרכזי ביותר.'
    }
  ] : [
    {
      name: 'Waves Project - Netanya',
      location: 'Netanya, Beachfront',
      type: '3-5 Rooms',
      price: 'From ₪1,850,000',
      completion: 'Delivery: 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      description: 'Luxury project with sea view, gym and pool. Special launch price!'
    },
    {
      name: 'David Tower - Jerusalem',
      location: 'Jerusalem, Kiryat Yovel',
      type: '2-4 Rooms',
      price: 'From ₪1,650,000',
      completion: 'Delivery: 2025',
      image: 'https://images.unsplash.com/photo-1541411735170-8528d194583e?w=800&q=80',
      description: 'Modern apartments in sought-after area, close to public transport and services.'
    },
    {
      name: 'Rothschild 360 - Tel Aviv',
      location: 'Tel Aviv, Rothschild Street',
      type: '3-4 Rooms',
      price: 'From ₪3,200,000',
      completion: 'Delivery: 2026',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      description: 'Luxury apartments in premium location, special architectural design.'
    },
    {
      name: 'Eilat Marina - Eilat',
      location: 'Eilat, Marina District',
      type: '2-3 Rooms',
      price: 'From ₪1,450,000',
      completion: 'Delivery: 2025',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Luxury vacation apartments with Red Sea view, high investment potential.'
    },
    {
      name: 'Rakhassim Green - Rakhassim',
      location: 'Rakhassim, Center',
      type: '4-5 Rooms + Garden',
      price: 'From ₪1,350,000',
      completion: 'Delivery: 2025',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Ground-floor homes in green and quiet area, especially affordable price.'
    },
    {
      name: 'Center Tower - Tel Aviv',
      location: 'Tel Aviv, City Center',
      type: '2-4 Rooms',
      price: 'From ₪2,850,000',
      completion: 'Delivery: 2026',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'Combined office and residential tower, in the most central location.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {isHebrew ? 'הפרויקטים שלנו' : 'Our Projects'}
          </h1>
          <p className="text-2xl text-[#D4AF37]">
            {isHebrew 
              ? 'מכירות מוקדמות במחירי השקה מיוחדים' 
              : 'Pre-sale opportunities at special launch prices'}
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl smooth-transition hover-lift overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 gradient-gold text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {project.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-[#2C2C2C] group-hover:text-[#D4AF37] smooth-transition">
                    {project.name}
                  </h3>

                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#D4AF37]" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>{project.completion}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href="#contact-form"
                    className="block w-full text-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:gradient-gold hover:text-white smooth-transition font-semibold"
                  >
                    {isHebrew ? 'מעוניין? צרו קשר' : 'Interested? Contact Us'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact-form">
        <ContactForm language={language} variant="compact" />
      </div>
    </div>
  );
}