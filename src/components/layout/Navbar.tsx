"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FileText, Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
    >
      <div className="relative w-full max-w-fit md:max-w-none md:w-auto flex flex-col items-center">
        
        {/* Desktop & Mobile Top Bar Wrapper */}
        <nav className="glass px-6 py-3 rounded-full flex items-center justify-between w-full md:w-auto gap-4 relative overflow-hidden group">
          
          {/* Subtle animated border glow on hover (Desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl hidden md:block"></div>

          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white flex items-center gap-2 rounded-full",
                    isActive ? "text-white" : "text-white/60"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon className="w-4 h-4 hidden sm:block" />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile View - Active Page Indicator */}
          <div className="md:hidden flex items-center gap-2 text-white font-medium pl-2">
            {navItems.find((item) => item.href === pathname)?.icon && (
              <span className="p-1.5 rounded-md bg-white/10">
                {(() => {
                  const Icon = navItems.find((item) => item.href === pathname)?.icon || Home;
                  return <Icon className="w-4 h-4" />;
                })()}
              </span>
            )}
            <span className="text-sm">
              {navItems.find((item) => item.href === pathname)?.name || "Menu"}
            </span>
          </div>

          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden glass rounded-3xl p-4 flex flex-col gap-2 border border-white/10 shadow-2xl backdrop-blur-2xl"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-medium transition-colors",
                      isActive 
                        ? "bg-white/10 text-white border border-white/10" 
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "")} />
                    {item.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
