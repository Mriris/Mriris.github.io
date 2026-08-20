"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function ProjectsSection({ profile }: { profile: Profile }) {
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
            {profile.projects.latin}
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {profile.projects.title}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {profile.projects.items.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-10 transition-all duration-300 hover:border-indigo-300 hover:shadow-2xl dark:border-neutral-800 dark:from-neutral-900 dark:to-black dark:hover:border-indigo-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Project name & tagline */}
                <h3 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white">
                  {project.name}
                </h3>

                <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-300">
                  {project.tagline}
                </p>

                {/* Metrics badges */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-neutral-300 bg-white/80 px-4 py-2 font-mono text-xs font-medium text-neutral-700 backdrop-blur-sm dark:border-neutral-700 dark:bg-black/80 dark:text-neutral-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Body text */}
                <p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {project.body}
                </p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link if available */}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    {project.hrefLabel}
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
