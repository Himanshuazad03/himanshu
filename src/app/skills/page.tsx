"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { Network, Shield, Workflow } from "lucide-react";
import Image from "next/image";
import { skillSections } from "@/lib/data";


export default function Skills() {
  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center mt-12 mb-32 gap-20 px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-neutral-400">
            A complete ecosystem of frontend frameworks, backend systems,
            databases, and deployment platforms powering scalable applications.
          </p>
        </motion.div>

        {/* Skill Sections Grouped Layout */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillSections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              {/* Liquid UI Background Layer */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
                <motion.div 
                  animate={{ 
                    x: ["0%", "15%", "-15%", "0%"],
                    y: ["0%", "-15%", "15%", "0%"],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-10 group-hover:opacity-40 blur-[50px] mix-blend-screen transition-opacity duration-700 ${section.glowLight}`}
                />
                <motion.div 
                  animate={{ 
                    x: ["0%", "-20%", "10%", "0%"],
                    y: ["0%", "20%", "-20%", "0%"],
                    scale: [1, 0.9, 1.2, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className={`absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-10 group-hover:opacity-40 blur-[50px] mix-blend-screen transition-opacity duration-700 ${section.glowLight}`}
                />
              </div>

              {/* Section Title with Animated Accent Line */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {section.title}
                </h3>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                  className={`h-[2px] w-16 mt-2 origin-left rounded-full ${section.glowLight.replace('/30', '').replace('/20', '')}`}
                />
              </div>

              {/* Inner Grid for Square Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">

                {section.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + (sIdx * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className={`
                      relative group/tile aspect-square rounded-xl flex flex-col items-center
                      justify-center text-center gap-3
                      border border-white/5 bg-white/5
                      transition-all duration-300 hover:border-white/20
                      ${section.shadowHover.replace('group-hover:', 'hover:')}
                    `}
                  >

                    {/* Glow Behind Icon inside tile */}
                    <div
                      className={`absolute w-12 h-12 rounded-full blur-xl opacity-0 group-hover/tile:opacity-60 transition-opacity duration-500 ${section.glowLight}`}
                    />

                    {/* Logo */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      {skill.image ? (
                        <img
                          src={skill.image}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain transition-transform duration-300 group-hover/tile:scale-110 drop-shadow-md"
                        />
                      ) : skill.icon ? (
                        <skill.icon
                          className={`w-10 h-10 ${skill.color} drop-shadow-md`}
                        />
                      ) : null}
                    </div>

                    {/* Text */}
                    <div className="px-2">
                      <h4 className="font-medium text-sm text-white leading-tight">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Gradient Hover Overlay inside tile */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 -z-10" />

                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}