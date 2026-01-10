"use client";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Certificates() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <Award className="text-blue-500" /> Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Next.js Professional", issuer: "Vercel", date: "2025" },
          { title: "AWS Cloud Practitioner", issuer: "Amazon", date: "2024" },
          { title: "Meta Front-End Engineer", issuer: "Coursera", date: "2024" }
        ].map((cert, index) => (
          <motion.div 
            key={index}
            whileHover={{ x: 10 }}
            className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            <ArrowUpRight className="text-gray-600 group-hover:text-white transition" size={20} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}