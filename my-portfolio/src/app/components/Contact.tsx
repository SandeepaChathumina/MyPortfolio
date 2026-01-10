"use client";
import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 w-full max-w-[1400px] mx-auto px-4">
      {/* Container with matching 2026 Bento aesthetic */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-[3rem] p-12 md:p-24 text-center backdrop-blur-xl"
      >
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Section Tag */}
          <div className="flex justify-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              <MessageCircle size={14} className="text-orange-400" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-orange-400">Get in Touch</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100">
            Let’s build the <br />
            <span className="text-orange-500">future together.</span>
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Whether you have a specific project in mind or just want to chat about 
            the latest in tech, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="mailto:sandeepa@example.com" 
              className="group flex items-center gap-3 bg-zinc-100 text-zinc-950 px-10 py-5 rounded-2xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <Mail size={20} className="group-hover:-rotate-12 transition-transform" />
              Start a Conversation
              <Send size={18} className="text-zinc-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="pt-8">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
              Currently based in Colombo, Sri Lanka
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}