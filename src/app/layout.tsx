// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "פועה – משווקת נדל״ן",
  description: "אתר שיווק נדל״ן של פועה",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
