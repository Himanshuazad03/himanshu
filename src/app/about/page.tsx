"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { GraduationCap, Code2, Server, BrainCircuit, Users, Terminal } from "lucide-react";

import Image from "next/image";

const timelineEvents = [
  // ... (rest remains the same)
  {
    icon: GraduationCap,
    title: "Started B.Tech CSE",
    description: "Built a strong foundation in Computer Science and Data Structures.",
    year: "Year 1"
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Mastered React, Next.js, and Node.js. Built multiple production-ready apps.",
    year: "Year 2"
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designed secure REST APIs, implemented JWT authentication, and scaled databases.",
    year: "Year 3"
  },
  {
    icon: BrainCircuit,
    title: "AI Integrations",
    description: "Integrated AI models into web products for enhanced user experiences.",
    year: "Year 3+"
  },
  {
    icon: Users,
    title: "Community Leadership",
    description: "Mentoring 20+ junior developers in DSA and modern web development.",
    year: "Ongoing"
  }
];

export default function About() {
  return (
    <PageTransition>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col items-center mt-12 gap-16">
          
          {/* Header & Photo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full px-4"
          >
            {/* Profile Photo */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-b from-blue-500/30 to-purple-500/30 backdrop-blur-sm shrink-0">
              <div className="w-full h-full rounded-full bg-neutral-900 border border-white/10 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/10 z-0" />
                <Image
                  src="/photo.png"
                  alt="Himanshu Azad"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover rounded-full z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
              </div>
            </div>

            {/* Title & Intro */}
            <div className="space-y-4 text-center md:text-left flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Hi, I'm <span className="text-gradient">Himanshu Azad</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-neutral-300">
                Full-Stack Developer
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Passionate about building scalable backend architectures and intuitive user interfaces. I engineer solutions that blend performance with exceptional design.
              </p>
            </div>
          </motion.div>

          {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full lg:px-8">
          
          {/* Left: Timeline */}
          <div className="relative border-l border-blue-500/30 pl-8 space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                   <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                </div>
                
                <div className="glass p-6 rounded-2xl border-l-[3px] border-l-blue-500 hover:bg-blue-500/5 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                           <event.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{event.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-3 block">{event.year}</span>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        {event.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Profile Card Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 sticky top-32 h-fit"
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              {/* Animated Glow Backing */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
              
              <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center gap-3">
                 <Terminal className="text-purple-400" />
                 Engineering Focus
              </h3>
              
              <div className="space-y-6 text-neutral-300 relative z-10">
                 <p className="leading-relaxed">
                   Currently in my 3rd year of Computer Science Engineering, my passion lies heavily in <strong className="text-white">backend architecture</strong> and <strong className="text-white">real-time systems</strong>.
                 </p>
                 <p className="leading-relaxed">
                   I enjoy tackling complex problems, translating them into clean code, and optimizing performance. With over <strong className="text-white">200 LeetCode problems</strong> solved, I maintain a strong foundation in Data Structures and Algorithms.
                 </p>
                 <p className="leading-relaxed">
                   My recent work spans across building robust APIs, securing applications with JWTs, and exploring ways to seamlessly integrate AI features into modern web platforms.
                 </p>
              </div>
            </div>

            {/* Quick Stats Grid under description */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Location", value: "Ujjain, India" },
                 { label: "Role", value: "Full-Stack Dev" }
               ].map((stat, i) => (
                 <motion.div 
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + i * 0.1 }}
                   className="glass p-4 rounded-xl text-center"
                 >
                    <p className="text-xs text-neutral-500 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-white font-medium mt-1">{stat.value}</p>
                 </motion.div>
               ))}
            </div>
            
          </motion.div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
