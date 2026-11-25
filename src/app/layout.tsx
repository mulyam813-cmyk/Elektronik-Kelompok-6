import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Mega Mulya Elektronik — Sistem Informasi Toko Elektronik",
    template: "%s | Mega Mulya Elektronik",
  },
  description: "Sistem Informasi & POS Mega Mulya Elektronik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#f4f5fb] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
