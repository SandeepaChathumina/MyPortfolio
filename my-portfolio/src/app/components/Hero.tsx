"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, MapPin, FileText, Cpu, Sparkles, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 pb-6 w-full max-w-[1400px] mx-auto px-4">
      {/* Background Grid Decoration to fill "emptiness" */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* LEFT: MAIN PROFILE - Spans 8 columns */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[450px] relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">Available for Hire</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              I'm <span className="text-blue-500">Sandeepa</span>. <br />
              <span className="text-zinc-100">Digital Architect & <br/>Full-stack Developer.</span>
            </h1>
            
            <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-light">
              Designing high-performance web applications with 
              <span className="text-zinc-200 font-medium"> minimalist UI</span> and 
              <span className="text-zinc-200 font-medium"> scalable engineering</span>.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 relative z-10">
            <button className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all text-sm">
              <FileText size={18} />
              View Resume
            </button>
            <div className="flex gap-2">
              <a href="#" className="p-3 bg-zinc-800/50 rounded-xl border border-white/5 hover:bg-zinc-700 transition-all">
                <Github size={20} className="text-zinc-400" />
              </a>
              <a href="#" className="p-3 bg-zinc-800/50 rounded-xl border border-white/5 hover:bg-zinc-700 transition-all">
                <Linkedin size={20} className="text-zinc-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE STACKED WIDGETS - Spans 4 columns */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          
          {/* TECH WIDGET */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-zinc-800 rounded-2xl text-blue-400">
                <Terminal size={22} />
              </div>
              <Cpu size={18} className="text-zinc-700 group-hover:text-blue-500/40 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 mb-1">Core Stack</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Next.js, TypeScript, Tailwind CSS, <br />PostgreSQL, Framer Motion.
              </p>
            </div>
          </motion.div>

          {/* LOCATION WIDGET */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5 backdrop-blur-md flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-zinc-800 rounded-2xl text-zinc-400">
                <MapPin size={22} />
              </div>
              <Globe size={18} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Based in</p>
              <p className="text-xl font-bold text-zinc-100">Colombo, Sri Lanka 🇱🇰</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}