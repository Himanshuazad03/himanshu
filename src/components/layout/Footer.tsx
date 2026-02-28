"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative mt-10 border-t border-white/10 bg-black/40 backdrop-blur-xl z-20"
    >
      {/* Subtle animated shine sweep */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear", repeatDelay: 6 }}
        className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
          
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white relative inline-block group">
              Himanshu Azad
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </h3>
            <p className="text-neutral-400 max-w-xs mx-auto md:mx-0 text-sm leading-relaxed">
              Full-Stack Developer building scalable systems.
            </p>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              {[ "Home", "About", "Projects", "Skills", "Contact" ].map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                const isActive = pathname === href;

                return (
                  <Link 
                    key={link} 
                    href={href} 
                    className={`relative group transition-colors text-sm font-medium ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}`}
                  >
                    {link}
                    <span 
                      className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 shadow-[0_0_5px_rgba(168,85,247,0.8)] ${
                        isActive 
                          ? "w-full bg-blue-400" 
                          : "w-0 bg-purple-400 group-hover:w-full"
                      }`} 
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex gap-4">
              {[ 
                { icon: Github, href: "https://github.com/Himanshuazad03" }, 
                { icon: Linkedin, href: "https://www.linkedin.com/in/himanshu-azad-5a97a3310/" }, 
                { icon: Mail, href: "mailto:himanshuazad05@gmail.com" } 
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-neutral-500">
          <p>© 2026 Himanshu Azad</p>
          <p className="flex items-center gap-1">Built with <span className="text-white font-medium">Next.js & Passion</span></p>
        </div>
      </div>
    </motion.footer>
  );
}
