"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="relative group">
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition duration-500"></div>
        <div className="relative overflow-hidden rounded-3xl aspect-square border border-white/10">
          <Image 
            src="/my1.jpg" 
            alt="About Me"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-700 scale-110 hover:scale-100"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold italic text-blue-400">01. About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a developer who bridges the gap between complex engineering and minimalist design. 
          With 3+ years of experience in the JavaScript ecosystem, I focus on building tools 
          that are not only fast but also intuitive to use.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-white font-bold text-2xl">15+</h4>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-white font-bold text-2xl">5+</h4>
            <p className="text-gray-400 text-sm">Global Certifications</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}