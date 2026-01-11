"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowLeft, Briefcase } from "lucide-react";
import { projectsData } from "@/app/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <section className="py-20 w-full max-w-350 mx-auto px-4">
      {/* HEADER */}
      <div className="mb-12 space-y-6">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-400 transition-colors w-fit"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-orange-400 font-medium tracking-widest uppercase text-xs">
            <Briefcase size={14} />
            <span>All Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Everything I’ve <span className="text-orange-500">Built</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
            A complete collection of my academic and personal projects,
            showcasing my growth as a software engineering undergraduate
            and full-stack developer.
          </p>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group bg-zinc-900/50 border border-white/5 rounded-4xl
              overflow-hidden backdrop-blur-sm
              hover:border-orange-500/30 transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-zinc-950/30 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm mt-3 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-800 border border-white/5
                      rounded-lg text-[10px] font-bold uppercase tracking-wider
                      text-orange-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
