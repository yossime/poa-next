"use client";
import { motion } from 'framer-motion';
import { Heart, Target, Award, Users } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function About({ language = 'he' }) {
  const isHebrew = language === 'he';

  const values = isHebrew ? [
    {
      icon: Heart,
      title: 'אמונה',
      description: 'מאמינה שלכל אדם מגיעה דירה משלו. זה לא עניין של כסף, אלא של רצון ואמונה.'
    },
    {
      icon: Target,
      title: 'מקצועיות',
      description: 'מתמחה במכירות מוקדמות במחירי השקה בכל רחבי הארץ. ליווי מקצועי מהרגע הראשון ועד למסירת המפתח.'
    },
    {
      icon: Award,
      title: 'מהימנות',
      description: 'שקיפות מלאה, ללא עמלות נסתרות. מעניקה שירות אישי ומסור לכל לקוח.'
    },
    {
      icon: Users,
      title: 'קהילה',
      description: 'בונה קהילה של אנשים שהגשימו את החלום - להיות בעלי דירה. כאן כולם מוצאים את הבית שלהם.'
    }
  ] : [
    {
      icon: Heart,
      title: 'Faith',
      description: 'I believe everyone deserves their own home. It\'s not about money, but about will and faith.'
    },
    {
      icon: Target,
      title: 'Professionalism',
      description: 'Specializing in pre-sale opportunities at launch prices nationwide. Professional guidance from first meeting to key delivery.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Full transparency, no hidden fees. Providing personal and dedicated service to every client.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of people who achieved their dream - homeownership. Everyone finds their home here.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="About"
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
            {isHebrew ? 'אודות פועה' : 'About Poa'}
          </h1>
          <p className="text-2xl text-[#D4AF37] max-w-3xl mx-auto">
            {isHebrew 
              ? 'משווקת נדל״ן בכל הארץ, מאמינה בזכות של כל אדם לדירה' 
              : 'Nationwide real estate marketer, believing in everyone\'s right to a home'}
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8">
              {isHebrew ? 'הסיפור שלי' : 'My Story'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                {isHebrew 
                  ? 'שלום, אני פועה – משווקת נדל״ן עצמאית הפועלת בכל רחבי הארץ. במשך שנים הבנתי שהנדל״ן הוא לא רק עסקה כלכלית, אלא חלום של אנשים שמחפשים מקום לקרוא לו בית.'
                  : 'Hello, I\'m Poa – an independent real estate marketer operating nationwide. Over the years, I\'ve understood that real estate isn\'t just a financial transaction, but a dream of people seeking a place to call home.'}
              </p>
              <p className="text-xl">
                {isHebrew 
                  ? 'אני מאמינה שלכל אדם יש זכות לדירה, ללא קשר למצב הכלכלי שלו. נדל״ן זה קודם כל אמונה ואומץ – לא כסף. המטרה שלי היא לעזור לאנשים למצוא את הדירה המושלמת שלהם, במחירי השקה מיוחדים.'
                  : 'I believe everyone has the right to a home, regardless of their financial situation. Real estate is first about faith and courage – not money. My goal is to help people find their perfect home at special launch prices.'}
              </p>
              <p className="text-xl">
                {isHebrew 
                  ? 'אני מתמחה במכירות מוקדמות בערים המובילות בישראל – נתניה, ירושלים, תל אביב, אילת, רכסים ועוד. מלווה את הלקוחות שלי בכל שלב, מהייעוץ הראשוני ועד למסירת המפתח.'
                  : 'I specialize in pre-sales in Israel\'s leading cities – Netanya, Jerusalem, Tel Aviv, Eilat, Rakhassim and more. I guide my clients every step of the way, from initial consultation to key delivery.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              {isHebrew ? 'הערכים שלי' : 'My Values'}
            </h2>
            <div className="w-24 h-1 gradient-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl smooth-transition hover-lift"
                >
                  <div className="gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">{value.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm language={language} variant="default" />
    </div>
  );
}