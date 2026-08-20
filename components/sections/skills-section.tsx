"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function SkillsSection({ profile }: { profile: Profile }) {
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
            {profile.skills.latin}
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {profile.skills.title}
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skills Groups */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {profile.skills.groups.map((group) => (
              <div key={group.id}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:bg-black dark:text-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Awards */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {profile.skills.awardsLabel}
              </h3>
              <ul className="space-y-3">
                {profile.skills.awards.map((award, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {profile.skills.educationLabel}
            </h3>
            <div className="space-y-6">
              {profile.skills.education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-black"
                >
                  <h4 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                    {edu.school}
                  </h4>
                  <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {edu.degree}
                  </p>
                  <p className="mb-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {edu.period}
                  </p>
                  {edu.notes.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
