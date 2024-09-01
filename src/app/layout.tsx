"use client";
import Sidebar from "@/layouts/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen grid grid-cols-5">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
