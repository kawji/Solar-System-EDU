import type { Metadata } from "next";
import { Sarabun,  } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
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
    <html lang="th">
      <body className={`${sarabun.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
