// src/app/page.tsx
import Hero from "@/components/home/Hero";
import VisionQuotes from "@/components/home/VisionQuotes";
import CitiesShowcase from "@/components/home/CitiesShowcase";
import ContactForm from "@/components/contact/ContactForm";

export default function HomePage() {
  // אם אתה צריך שפה – אפשר להשתמש ב-Context או props בעתיד
  const language: "he" | "en" = "he";

  return (
    <>
      <Hero language={language} />
      <VisionQuotes language={language} />
      <CitiesShowcase language={language} />
      <section id="contact" className="mt-16">
        <ContactForm language={language} variant="default" />
      </section>
    </>
  );
}
