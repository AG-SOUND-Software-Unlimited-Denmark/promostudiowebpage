import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PublicHeader } from "@/components/PublicHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Promo Studio — AI promos for artists & brands",
  description:
    "Turn a photo into short-form video promos for Instagram and TikTok. Concert campaigns and brand announcements.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-bg text-white">
        <PublicHeader />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
