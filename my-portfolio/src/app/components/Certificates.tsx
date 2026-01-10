"use client";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

const certificates = [
  { title: "Next.js Professional", issuer: "Vercel", date: "2025" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon", date: "2024" },
  { title: "Meta Front-End Engineer", issuer: "Coursera", date: "2024" },
  { title: "Google UX Design", issuer: "Coursera", date: "2023" }
];

export default function Certificates() {
  return (
    <section className="py-20 w-full max-w-350 mx-auto px-4">
      {/* Section Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2 text-orange-400 font-medium tracking-widest uppercase text-xs">
          <ShieldCheck size={14} />
          <span>Verifications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
          Professional <span className="text-orange-500">Credentials.</span>
        </h2>
      </div>
      
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="flex items-center justify-between p-6 rounded-4xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/50 transition-all group backdrop-blur-sm"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 bg-zinc-800 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 group-hover:text-orange-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  {cert.issuer} • <span className="text-zinc-600">{cert.date}</span>
                </p>
              </div>
            </div>
            
            <div className="p-2">
               <ArrowUpRight 
                className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                size={20} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}