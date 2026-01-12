"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowLeft, Briefcase } from "lucide-react";
import { projectsData } from "@/app/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    /* 1. Full-width background wrapper */
    <main className="min-h-screen bg-zinc-950 w-full overflow-x-hidden">
      
      {/* 2. THE CENTERED CONTAINER - This MUST match your other pages exactly */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20">
        
        {/* HEADER SECTION */}
        <header className="mb-20 space-y-8">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push("/")}
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-400 transition-colors w-fit"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-orange-500 font-bold tracking-[0.2em] uppercase text-[10px]">
              <Briefcase size={14} />
              <span>Full Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100">
              Everything I’ve <span className="text-orange-500">Built.</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              A complete collection of my academic and personal projects,
              showcasing my growth as a software engineering undergraduate.
            </p>
          </div>
        </header>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-zinc-900/40 border border-white/5 rounded-[2.5rem] 
                         overflow-hidden backdrop-blur-md hover:border-orange-500/30 
                         transition-all duration-500 flex flex-col h-full"
            >
              {/* Image, Content, and Link code remains the same... */}
              <div className="relative h-64 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">{project.description}</p>
                {/* ... links and tech tags ... */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}