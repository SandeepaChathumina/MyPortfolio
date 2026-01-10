"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code2, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 w-full max-w-350 mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* IMAGE BLOCK - Spans 5 columns */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-4xl aspect-4/5 border border-white/5 bg-zinc-900">
            <Image 
              src="/my1.jpg" 
              alt="Sandeepa - Digital Architect"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-700 scale-105 hover:scale-100"
            />
          </div>
        </div>

        {/* CONTENT BLOCK - Spans 7 columns */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-orange-400 font-medium tracking-widest uppercase text-xs">
              <User size={14} />
              <span>Personal Essence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
              Transforming code into <br />
              <span className="text-orange-500">digital experiences.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-2xl">
              I’m a developer who bridges the gap between complex engineering and minimalist design. 
              With a deep focus on the JavaScript ecosystem, I craft high-performance tools 
              that feel as good as they function. My goal is to build software that is 
              not just code, but an intuitive journey for the user.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm group hover:border-orange-500/30 transition-colors">
              <Code2 className="text-orange-500 mb-3" size={24} />
              <h4 className="text-zinc-100 font-bold text-3xl">15+</h4>
              <p className="text-zinc-500 text-sm tracking-wide uppercase">Projects Built</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm group hover:border-orange-500/30 transition-colors">
              <Rocket className="text-orange-500 mb-3" size={24} />
              <h4 className="text-zinc-100 font-bold text-3xl">5+</h4>
              <p className="text-zinc-500 text-sm tracking-wide uppercase">Global Certs</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}