"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/portfolio";
import { Section } from "./ui/Section";
import Image from "next/image";

export function TechStack() {
  return (
    <Section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Technologies
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TECH_STACK.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center p-2 border border-zinc-200 dark:border-zinc-700 transition-colors group-hover:border-blue-500 dark:group-hover:border-blue-400">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={tech.scale ? 36 : 24}
                      height={tech.scale ? 36 : 24}
                      className=""
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white dark:bg-zinc-800 px-2 py-1 rounded shadow-lg z-20">
                    {tech.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
