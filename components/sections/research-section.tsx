"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function ResearchSection({ profile }: { profile: Profile }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative border-t border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-baseline gap-4"
        >
          <span className="font-mono text-sm font-medium uppercase tracking-widest text-neutral-400">
            {profile.research.latin}
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {profile.research.title}
          </h2>
        </motion.div>

        {/* Research Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {profile.research.areas.map((area) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 transition-all hover:border-indigo-300 hover:shadow-xl dark:border-neutral-800 dark:from-neutral-900 dark:to-black dark:hover:border-indigo-700"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
                  {area.title}
                </h3>

                <p className="mb-6 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {area.summary}
                </p>

                <ul className="space-y-2">
                  {area.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
