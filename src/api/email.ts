// src/api/base44Client.ts

// ⚠️ חשוב:
// 1. פתח חשבון ב-https://www.emailjs.com
// 2. צור Service (למשל Gmail או ספק אחר)
// 3. צור Template עם השדות: to_email, subject, message (אפשר להוסיף עוד אם רוצים)
// 4. העתק את SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY והדבק למטה

const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY"; // נקרא גם user_id בחלק מהדוקומנטציה

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

type SendEmailArgs = {
  to: string;
  subject: string;
  body: string;
};

export const email = {
  integrations: {
    Core: {
      SendEmail: async ({ to, subject, body }: SendEmailArgs) => {
        // ניתן להוסיף כאן ולידציה בסיסית
        if (!to) {
          throw new Error("Missing 'to' in SendEmail");
        }

        const payload = {
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: to,
            subject,
            message: body,
          },
        };

        const res = await fetch(EMAILJS_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          console.error("Email send failed:", res.status, text);
          throw new Error("Failed to send email");
        }

        // EmailJS מחזיר טקסט פשוט, לא JSON
        const resultText = await res.text();
        console.log("Email sent successfully:", resultText);
        return { ok: true, result: resultText };
      },
    },
  },
};
