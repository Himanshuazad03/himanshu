"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import React, { useRef, useState } from "react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    setRotateX((mouseY / height) * -8);
    setRotateY((mouseX / width) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative group rounded-3xl border bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl ${project.color}`}
      >
        {/* Glow */}
        <div
          className={`absolute -inset-10 opacity-0 group-hover:opacity-100 transition duration-700 blur-[120px] ${project.glow}`}
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 p-6">

          {/* IMAGE */}
          <motion.div
            style={{ translateZ: 40 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={800}
                className="rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Title */}
            <motion.h3
              style={{ translateZ: 60 }}
              className="text-3xl font-semibold text-white"
            >
              {project.title}
            </motion.h3>

            {/* Dotted Description */}
            <motion.div
              style={{ translateZ: 50 }}
              className="space-y-4"
            >
              {project.description.map((item: any) => (
                <div key={item.id} className="flex gap-3">
                  {/* Dot */}
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <div>
                    <p className="text-lg font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              style={{ translateZ: 55 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {project.tech.map((tech: any) => (
                <div
                  key={tech.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/30 hover:bg-white/10 transition"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              style={{ translateZ: 70 }}
              className="flex gap-4 pt-6"
            >
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center text-black font-medium gap-2 text-sm px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-700 transition"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </Link>
              )}
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center mt-20 mb-24 gap-16 ">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            In-depth systems engineered for scalability, intelligence, and real-world performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20 w-full px-6 ">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </PageTransition>
  );
}