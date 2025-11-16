import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar System EDU — กำเนิดระบบสุริยะและการแบ่งเขตบริวารรอบดวงอาทิตย์",
  description: "สำรวจการกำเนิดระบบสุริยะ ดาวเคราะห์ ดาวบริวาร และโครงสร้างรอบดวงอาทิตย์กับ Solar System EDU แหล่งความรู้ดาราศาสตร์ครบวงจร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
