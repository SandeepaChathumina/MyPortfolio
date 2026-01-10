"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Dashboard",
    description: "A real-time analytics platform with AI insights.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
    github: "#",
    image: "/project1.jpg" // Add images to public folder
  },
  {
    title: "E-Commerce OS",
    description: "High-performance storefront with sub-second speeds.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "/project2.jpg"
  }
];

export default function Projects() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12 italic text-blue-400">02. Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="h-64 bg-gray-800 relative">
              {/* Replace with <Image /> when you have files */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            </div>
            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                </div>
                <div className="flex gap-3">
                  <Github size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-blue-300">
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