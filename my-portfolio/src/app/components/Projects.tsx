"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-20 w-full max-w-350 mx-auto px-4">
      {/* Section Header */}
      <div className="mb-12 flex justify-between items-end">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-orange-400 font-medium tracking-widest uppercase text-xs">
            <Briefcase size={14} />
            <span>Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            My <span className="text-orange-500">Projects.</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm italic">
          <span>Scroll to explore</span>
          <ArrowRight size={16} className="animate-pulse" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative shrink-0 w-[85vw] md:w-150 snap-center bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="h-64 md:h-80 overflow-hidden relative">
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                 <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                 />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-zinc-950 to-transparent z-20" />
            </div>

            {/* Content Container */}
            <div className="p-8 relative z-30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-zinc-800 border border-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}