"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { email } from '@/api/email';

export default function ContactForm({ language, variant = 'default' }: { language: string, variant: string }) {
  const isHebrew = language === 'he';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    area: '',
    message: ''
  });

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically save to a Contact entity or send an email
      await email.integrations.Core.SendEmail({
        to: 'poa@example.com', // Replace with actual email
        subject: isHebrew ? `פנייה חדשה מ-${formData.fullName}` : `New inquiry from ${formData.fullName}`,
        body: `
          ${isHebrew ? 'שם מלא' : 'Full Name'}: ${formData.fullName}
          ${isHebrew ? 'טלפון' : 'Phone'}: ${formData.phone}
          ${isHebrew ? 'אימייל' : 'Email'}: ${formData.email}
          ${isHebrew ? 'אזור מגורים' : 'Area'}: ${formData.area}
          ${isHebrew ? 'הודעה' : 'Message'}: ${formData.message}
        `
      });

      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', area: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8 text-center">
          {isHebrew ? 'בואו נמצא לכם דירה' : 'Let\'s Find Your Home'}
        </h3>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-[#2C2C2C] mb-2">
              {isHebrew ? 'תודה רבה!' : 'Thank You!'}
            </h4>
            <p className="text-gray-600">
              {isHebrew ? 'ניצור איתך קשר בהקדם' : 'We\'ll contact you soon'}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={isHebrew ? 'שם מלא *' : 'Full Name *'}
                required
                className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
              />
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={isHebrew ? 'טלפון *' : 'Phone *'}
                required
                className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={isHebrew ? 'אימייל *' : 'Email *'}
                required
                className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
              />
              <Input
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder={isHebrew ? 'אזור מגורים מועדף' : 'Preferred Area'}
                className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
              />
            </div>

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={isHebrew ? 'ספרו לנו קצת על מה שאתם מחפשים...' : 'Tell us about what you\'re looking for...'}
              className="min-h-32 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl resize-none"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 text-lg font-semibold gradient-gold text-white rounded-xl hover:shadow-2xl smooth-transition hover-lift disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{isHebrew ? 'שולח...' : 'Sending...'}</span>
              ) : (
                <>
                  {isHebrew ? 'אני רוצה למצוא דירה' : 'Find My Home'}
                  <Send className={`w-5 h-5 ${isHebrew ? 'mr-2' : 'ml-2'}`} />
                </>
              )}
            </Button>
          </form>
        )}
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 text-center">
            {isHebrew ? 'בואו נתחיל' : 'Let\'s Get Started'}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            {isHebrew 
              ? 'מלאו את הפרטים ונחזור אליכם בהקדם' 
              : 'Fill in your details and we\'ll get back to you soon'}
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-[#2C2C2C] mb-3">
                {isHebrew ? 'תודה רבה!' : 'Thank You!'}
              </h3>
              <p className="text-xl text-gray-600">
                {isHebrew ? 'ניצור איתך קשר בהקדם האפשרי' : 'We\'ll contact you as soon as possible'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={isHebrew ? 'שם מלא *' : 'Full Name *'}
                  required
                  className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={isHebrew ? 'טלפון *' : 'Phone *'}
                  required
                  className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isHebrew ? 'אימייל *' : 'Email *'}
                  required
                  className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
                />
                <Input
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder={isHebrew ? 'אזור מגורים מועדף' : 'Preferred Area'}
                  className="h-14 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl"
                />
              </div>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={isHebrew ? 'ספרו לנו קצת על מה שאתם מחפשים...' : 'Tell us about what you\'re looking for...'}
                className="min-h-40 text-lg border-2 border-gray-200 focus:border-[#D4AF37] rounded-xl resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-lg font-semibold gradient-gold text-white rounded-xl hover:shadow-2xl smooth-transition hover-lift disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{isHebrew ? 'שולח...' : 'Sending...'}</span>
                ) : (
                  <>
                    {isHebrew ? 'אני רוצה למצוא דירה' : 'Find My Home'}
                    <Send className={`w-5 h-5 ${isHebrew ? 'mr-2' : 'ml-2'}`} />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}