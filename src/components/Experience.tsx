"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import { Section } from "./ui/Section";

export function Experience() {
  return (
    <Section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
        Experience
      </h2>

      <div className="relative border-l border-zinc-800 ml-3 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-black bg-zinc-500" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-zinc-100">
                {job.role} <span className="text-zinc-500 font-normal">at</span>{" "}
                {job.company}
              </h3>
              <time className="text-sm text-zinc-400 font-mono">
                {job.period}
              </time>
            </div>

            <p className="text-zinc-400 leading-relaxed">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
