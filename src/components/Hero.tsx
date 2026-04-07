"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
};

export function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-500">
          Mikhail Bialou
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-400">
          Frontend Developer
        </h2>

        <div className="max-w-2xl text-lg text-zinc-300 leading-relaxed">
          <p>
            Senior Frontend Engineer with{" "}
            <span className="font-bold text-white">6 years of experience</span>{" "}
            developing{" "}
            <span className="font-bold text-white">
              high-stakes financial platforms and global e-commerce engines
            </span>
            . Expert in{" "}
            <span className="font-bold text-white">
              React, TypeScript, and Next.js
            </span>
            , specializing in{" "}
            <span className="font-bold text-white">
              Micro-frontend architectures and high-performance SSR
            </span>
            . I focus on delivering{" "}
            <span className="font-bold text-white">
              complex engineering projects that drive real business results
            </span>
            . Proven track record of{" "}
            <span className="font-bold text-white">
              architecting scalable systems and delivering measurable conversion
              growth
            </span>{" "}
            through optimized UI state management and performance tuning.
            Outside of work, I actively participate in{" "}
            <span className="font-bold text-white">
              hackathons and tech conferences
            </span>{" "}
            .
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Icon className="w-6 h-6 text-zinc-300" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
