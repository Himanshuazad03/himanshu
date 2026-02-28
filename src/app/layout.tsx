import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleMesh from "@/components/background/ParticleMesh";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu Azad | Full-Stack Developer",
  description: "Portfolio of Himanshu Azad - Building Scalable Full-Stack Experiences with Next.js, MERN, and AI Integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen antialiased bg-black text-white selection:bg-purple-500/30 flex flex-col`}>
        {/* Persistent 3D Background Space */}
        <ParticleMesh />
        
        {/* Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          {children}
          <Toaster position="top-center" />
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
