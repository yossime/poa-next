"use client";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact({ language = 'he' }) {
  const isHebrew = language === 'he';

  const contactInfo = isHebrew ? [
    {
      icon: Phone,
      title: 'טלפון',
      value: '050-123-4567',
      link: 'tel:+972501234567'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: 'poa@realestate.co.il',
      link: 'mailto:poa@realestate.co.il'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'שלחו הודעה',
      link: 'https://wa.me/972501234567'
    },
    {
      icon: MapPin,
      title: 'מיקום',
      value: 'פועלת בכל הארץ',
      link: null
    }
  ] : [
    {
      icon: Phone,
      title: 'Phone',
      value: '050-123-4567',
      link: 'tel:+972501234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'poa@realestate.co.il',
      link: 'mailto:poa@realestate.co.il'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Send Message',
      link: 'https://wa.me/972501234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Operating Nationwide',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
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
            {isHebrew ? 'צור קשר' : 'Contact Us'}
          </h1>
          <p className="text-2xl text-[#D4AF37]">
            {isHebrew 
              ? 'נשמח לשמוע ממך ולעזור למצוא את הדירה המושלמת' 
              : 'We\'d love to hear from you and help find your perfect home'}
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <div className="gradient-gold w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{info.title}</h3>
                      <p className="text-gray-600 group-hover:text-[#D4AF37] smooth-transition">
                        {info.value}
                      </p>
                    </a>
                  ) : (
                    <>
                      <div className="gradient-gold w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} variant="default" />

      {/* Why Contact Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8F6F0] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8">
              {isHebrew ? 'למה לפנות אלינו?' : 'Why Contact Us?'}
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {isHebrew 
                  ? 'אני כאן כדי לעזור לכם למצוא את הדירה שתתאים בדיוק לצרכים שלכם. עם ניסיון רב בתחום ומומחיות במכירות מוקדמות, אני מבטיחה ליווי מקצועי ואישי לאורך כל הדרך.'
                  : 'I\'m here to help you find the apartment that perfectly fits your needs. With extensive experience in the field and expertise in pre-sales, I guarantee professional and personal guidance throughout.'}
              </p>
              <p>
                {isHebrew 
                  ? 'אל תהססו לפנות - הייעוץ הראשוני חינם לחלוטין, ואשמח לשמוע על הצרכים והחלומות שלכם.'
                  : 'Don\'t hesitate to reach out - initial consultation is completely free, and I\'d love to hear about your needs and dreams.'}
              </p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                {isHebrew 
                  ? 'אם יש לך רצון לדירה – תהיה לך דירה.' 
                  : 'If you have the will for a home – you will have a home.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}