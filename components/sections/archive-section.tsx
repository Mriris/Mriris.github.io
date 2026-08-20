"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function ArchiveSection({ profile }: { profile: Profile }) {
  return (
    <section className="relative border-t border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
        >
          {profile.archive.label}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-12 transition-all hover:border-indigo-300 hover:shadow-2xl dark:border-neutral-800 dark:from-neutral-900 dark:to-black dark:hover:border-indigo-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <h3 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
              {profile.archive.title}
            </h3>
            <p className="mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
              {profile.archive.description}
            </p>
            <a
              href={profile.archive.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-neutral-100"
            >
              {profile.archive.cta}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
