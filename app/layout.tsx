import type { Metadata } from "next";
import "./globals.css";
import HashCleaner from "@/components/HashCleaner";

export const metadata: Metadata = {
  title: "Habil Yakub Arafah - Portfolio",
  description: "Full Stack Developer specializing in PHP, JavaScript, React & Node.js",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HashCleaner />
        {children}
      </body>
    </html>
  );
}
