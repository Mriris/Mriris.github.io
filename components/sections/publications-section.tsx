"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function PublicationsSection({ profile }: { profile: Profile }) {
  return (
    <section className="relative border-t border-neutral-200 bg-neutral-50 py-24 dark:border-neutral-800 dark:bg-neutral-950">
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
            {profile.publications.latin}
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {profile.publications.title}
          </h2>
        </motion.div>

        {/* Publications Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          {profile.publications.items.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 -translate-x-1/2">
                {pub.live ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="h-3 w-3 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50"
                  />
                ) : (
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                )}
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700">
                {/* Status & Venue Note */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      pub.live
                        ? "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
                        : "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {pub.venueNote}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-tight text-neutral-900 dark:text-white">
                  {pub.title}
                </h3>

                {/* Venue */}
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {pub.venue}
                </p>

                {/* Role & Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <span>{pub.role}</span>
                  {pub.meta && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-neutral-400" />
                      <span className="font-mono text-xs">{pub.meta}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
