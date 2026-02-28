"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Terminal, 
  User, 
  Code, 
  Database, 
  Server, 
  ChevronRight, 
  Download, 
  Mail, 
  ExternalLink,
  Settings
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { techStack } from "@/lib/data";
import Image from "next/image";

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50); // Typing speed
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return (
    <span className="inline-block relative">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-blue-500 ml-1 translate-y-[2px]"
      />
    </span>
  );
};

const stats = [
  { value: "4", label: "Production Apps", icon: Server },
  { value: "200+", label: "LeetCode Solved", icon: Terminal },
  { value: "3rd Yr", label: "CSE Student", icon: Code },
];



const featuredProjects = [
  {
    title: "FinSight",
    description: "AI-powered personal finance dashboard for tracking transactions, managing budgets, and analyzing spending through smart insights.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Clerk", "Inngest" ],
    image: "/dashBoard.png"
  },
  {
    title: "SyncUp",
    description: "Real-time chat application with private and group messaging, media sharing, typing indicators, and secure authentication.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "Material UI"],
    image: "/syncup.png"
  },
  {
    title: "DevBlogs",
    description: "Full-featured blog platform with markdown support, authentication, comments, and content management.",
    tech: ["Next.js", "Supabase", "Tailwind", "Shadcn", "Prisma", "TypeScript"],
    image: "/Devbloging.png"
  }
];

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[90vh] w-full mt-16 space-y-40 mb-28 px-6 lg:px-16 overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col items-center text-center space-y-10 w-full max-w-6xl z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Himanshu Azad • Full-Stack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight drop-shadow-sm"
          >
            Building Scalable <br className="hidden sm:block" />
            <span className="text-gradient">Full-Stack Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-2xl min-h-[2rem]"
          >
            <Typewriter text="Next.js | MERN | AI Integration | Real-Time Systems" delay={1} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full group relative overflow-hidden bg-yellow-300 text-black hover:bg-yellow-400">
                <span className="relative z-10 flex items-center font-semibold">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </Link>
            
            <Link href="/FullStack_Resume.pdf" download className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-slate-700 text-slate-300 bg-slate-100 text-slate-800
                hover:bg-slate-900 hover:text-slate-50 cursor-pointer">
                 <Download className="mr-2 w-4 h-4" />
                     Download Resume
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="w-full max-w-7xl z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3 + i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 group hover:border-blue-500/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{stat.value}</h3>
                  <p className="text-sm text-neutral-400 font-medium tracking-wide uppercase">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- ABOUT PREVIEW SECTION --- */}
        <section className="w-full max-w-7xl z-10 relative px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center"
          >
            {/* Left: Photo / Visual */}
            <div className="relative flex justify-center items-center group">
              {/* Glowing animated gradient ring */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-spin"
                style={{ animationDuration: '10s' }}
              />
              
              <motion.div
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative 
                          w-80 h-80 
                          sm:w-96 sm:h-96 
                          md:w-[420px] md:h-[420px] 
                          lg:w-[480px] lg:h-[480px] 
                          rounded-full 
                          p-2 
                          bg-gradient-to-b from-blue-500/30 to-purple-500/30 
                          backdrop-blur-sm"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-white/10 flex items-center justify-center">

                  {/* subtle inner blue tint */}
                  <div className="absolute inset-0 bg-blue-500/10 z-0" />

                  {/* profile image */}
                  <Image
                    src="/photo.png"
                    alt="Himanshu Azad"
                    fill
                    sizes="(max-width: 768px) 300px,
                          (max-width: 1024px) 420px,
                          480px"
                    className="object-cover rounded-full z-10"
                    priority
                  />

                  {/* bottom cinematic fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
                </div>
              </motion.div>
              
              {/* Floating element */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass p-4 rounded-xl flex items-center gap-3 border-blue-500/30"
              >
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold">Available for Work</span>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Architecting <span className="text-gradient">Real-World</span> Solutions
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                I am a full-stack developer obsessed with scalable systems and AI integration. Currently pursuing my Computer Science degree, I specialize in the Next.js and MERN ecosystems.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Built 4 production-ready applications",
                  "Strong focus on backend architecture & APIs",
                  "200+ LeetCode problems solved"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full glass hover:bg-white/10 group">
                    Learn More About Me
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- TECH STACK PREVIEW SECTION --- */}
        <section className="w-full max-w-7xl z-10 relative space-y-12 px-4">
          <div className="text-center space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Tech Stack <span className="text-gradient">I Work With</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02, rotateX: 5, rotateY: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group relative overflow-visible"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${tech.color} transition-opacity duration-500 rounded-2xl blur-md`} />
                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors relative z-10`}>
                  <img src={tech.logo} alt={tech.name} className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </div>
                <div className="space-y-1 z-10">
                  <h4 className="font-semibold text-white tracking-wide">{tech.name}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center pt-8">
             <Link href="/skills">
                <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors glass">
                  View Full Skills
                  <Settings className="ml-2 w-4 h-4" />
                </Button>
             </Link>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}
        <section className="w-full max-w-7xl z-10 relative space-y-12 px-4">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <Link href="/projects">
                <Button variant="ghost" className="rounded-full group hover:bg-white/5">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden group flex flex-col border border-white/10 hover:border-blue-500/50 transition-all duration-500 p-2"
              >
                <div className="w-full h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 relative overflow-hidden flex-shrink-0 rounded-2xl">
                   {project.image && (
                     <Image 
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover opacity-80 transition-all duration-700"
                     />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-400 mb-7 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map(t => (
                      <span key={t} className="text-m px-2 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Link href="/projects">
                      <span className="inline-flex items-center text-m font-medium text-blue-400 group-hover:text-blue-300">
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="w-full relative mt-20 mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto glass rounded-3xl p-10 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-[80px] -z-10 group-hover:opacity-80 opacity-40 transition-opacity duration-1000" />
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-blue-500/30 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
                 Let's Build Something <br className="hidden sm:block" />
                 <span className="text-gradient">Impactful Together</span>
               </h2>
               <p className="text-lg text-neutral-300">
                 Currently open to internships and full-stack software engineering opportunities.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                 <Link href="/contact" className="w-full sm:w-auto">
                   <Button size="lg" className="w-full sm:w-auto rounded-full group relative overflow-hidden bg-yellow-300 text-black hover:bg-yellow-400 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] cursor-pointer">
                     <span className="relative z-10 flex items-center font-bold">
                       <Mail className="mr-2 w-4 h-4" />
                       Contact Me
                     </span>
                     <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                   </Button>
                 </Link>
                 
               </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
