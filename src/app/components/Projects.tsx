"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import { projectsData } from "../data/projects";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <section className="py-20 w-full max-w-350 mx-auto px-4 overflow-hidden">
      {/* Header */}
      <div className="mb-12 flex justify-between items-end">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-orange-400 font-medium tracking-widest uppercase text-xs">
            <Briefcase size={14} />
            <span>Selected Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Projects I’ve <span className="text-orange-500">Built.</span>
          </h2>

          <p className="text-zinc-400 max-w-xl text-sm">
            Academic and personal projects focused on full-stack development,
            real-world problem solving, and modern web technologies.
          </p>
        </div>

        {/* CLICKABLE CTA */}
        <button
          onClick={() => router.push("/projects")}
          className="hidden md:flex items-center gap-2 text-zinc-500 text-sm italic hover:text-orange-400 transition-colors"
        >
          <span>View all projects</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...projectsData, ...projectsData].map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group relative shrink-0 w-[80vw] md:w-150 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 md:h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950/30 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-zinc-950 to-transparent z-20" />
              </div>

              {/* Content */}
              <div className="p-8 relative z-30">
                <div className="flex justify-between items-start gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="text-zinc-500 hover:text-orange-400 transition-colors"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="text-zinc-500 hover:text-orange-400 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 border border-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}