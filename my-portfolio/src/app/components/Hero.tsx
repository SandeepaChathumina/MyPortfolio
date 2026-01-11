"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Terminal,
  MapPin,
  FileText,
  Cpu,
  Sparkles,
  Globe,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 pb-6 w-full max-w-350 mx-auto px-4 relative">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffa50005_1px,transparent_1px),linear-gradient(to_bottom,#ffa50005_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT: MAIN PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 p-8 md:p-10 rounded-4xl bg-zinc-900/50 border border-orange-500/10 backdrop-blur-md flex flex-col justify-between min-h-112.5 relative overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] group-hover:bg-orange-500/10 transition-colors duration-700" />

          <div className="relative z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles size={14} className="text-orange-400" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-orange-400">
                Available for Internships & Freelance
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              I'm <span className="text-orange-500">Sandeepa</span>. <br />
              <span className="text-zinc-100">
                Software Engineering <br />
                Undergraduate & Full-Stack Developer.
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-light">
              Building modern web applications with
              <span className="text-orange-400 font-medium">
                {" "}
                clean UI
              </span>{" "}
              and
              <span className="text-zinc-200 font-medium">
                {" "}
                real-world full-stack solutions
              </span>
              , focused on learning, scalability, and performance.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all text-sm shadow-lg shadow-orange-500/20">
              <FileText size={18} />
              View Resume
            </button>

            <div className="flex gap-2">
              <a
                href="#"
                className="p-3 bg-zinc-800/50 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-zinc-700 transition-all"
              >
                <Github
                  size={20}
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-800/50 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-zinc-700 transition-all"
              >
                <Linkedin
                  size={20}
                  className="text-zinc-400 hover:text-orange-400 transition-colors"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: STACKED WIDGETS */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          {/* CORE STACK */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-4xl bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-orange-500/20 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
                <Terminal size={22} />
              </div>
              <Cpu
                size={18}
                className="text-zinc-700 group-hover:text-orange-500/40 transition-colors"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-100 mb-1">
                Core Stack
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                MERN Stack, Next.js, TypeScript, <br />
                Tailwind CSS, REST APIs.
              </p>
            </div>
          </motion.div>

          {/* CURRENTLY LEARNING */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-4xl bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-orange-500/20 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-zinc-800 rounded-2xl text-orange-400">
                <Cpu size={22} />
              </div>
              <Sparkles
                size={18}
                className="text-zinc-700 group-hover:text-orange-400 transition-colors"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                Currently Learning
              </p>
              <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                Angular, Docker, Backend Optimization,
                <br /> Deployment & System Design Basics.
              </p>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-4xl bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-orange-500/20 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-zinc-800 rounded-2xl text-orange-400">
                <MapPin size={22} />
              </div>
              <Globe
                size={18}
                className="text-zinc-700 group-hover:text-orange-400 transition-colors"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                Based In
              </p>
              <p className="text-xl font-bold text-zinc-100">
                Colombo, Sri Lanka 🇱🇰
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
