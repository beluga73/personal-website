"use client";

import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-900"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 space-y-20 pb-20">
        <Hero />
        <TechStack />
        <Experience />
      </div>
    </main>
  );
}
