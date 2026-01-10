"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Dashboard",
    description: "A real-time analytics platform with AI insights and predictive data modeling.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
    github: "#",
    image: "/project1.jpg" 
  },
  {
    title: "E-Commerce OS",
    description: "High-performance storefront with sub-second speeds and global edge caching.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "/project2.jpg"
  }
];

export default function Projects() {
  return (
    <section className="py-20 w-full max-w-[1400px] mx-auto px-4">
      {/* Section Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2 text-blue-400 font-medium tracking-widest uppercase text-xs">
          <Briefcase size={14} />
          <span>Case Studies</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
          Selected <span className="text-blue-500">Work.</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="h-64 md:h-80 overflow-hidden relative">
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* Image Placeholder - Replace src with project.image when ready */}
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                 <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                 />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-20" />
            </div>

            {/* Content Container */}
            <div className="p-8 relative z-30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-[90%]">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-zinc-800 border border-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-blue-400">
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