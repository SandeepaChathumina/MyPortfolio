"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="mt-32 pb-24">
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-[40px] p-8 md:p-16 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's work together.</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
            Currently accepting new freelance projects and full-time opportunities.
          </p>
          <a 
            href="mailto:your@email.com" 
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            <Mail size={20} />
            Say Hello
            <Send size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}