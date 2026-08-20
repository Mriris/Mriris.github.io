"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Particles } from "@/components/ui/particles";
import type { Profile } from "@/lib/types";

export function HeroSection({ profile }: { profile: Profile }) {
  return (
    <HeroHighlight containerClassName="min-h-screen">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color="#6366f1"
        refresh={false}
      />

      <div className="relative z-30 mx-auto max-w-7xl px-6 text-center">
        {/* Affiliation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400"
        >
          {profile.hero.affiliation}
          <span className="mx-3 opacity-40">/</span>
          <span className="font-mono text-xs">{profile.hero.period}</span>
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 text-5xl font-bold text-neutral-900 dark:text-white md:text-7xl"
        >
          {profile.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-neutral-400"
        >
          {profile.hero.latinName}
        </motion.p>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-100 md:text-6xl"
        >
          {profile.hero.statement.map((line, idx) => (
            <div key={idx}>
              {idx === 1 ? (
                <Highlight>{line}</Highlight>
              ) : (
                line
              )}
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
        >
          {profile.hero.tagline}
        </motion.p>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {profile.hero.keywords.map((keyword, idx) => (
            <span
              key={idx}
              className="rounded-full border border-neutral-300 bg-white/50 px-4 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur-sm dark:border-neutral-700 dark:bg-black/50 dark:text-neutral-300"
            >
              {keyword}
            </span>
          ))}
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href={`mailto:${profile.hero.email}`}
            className="font-mono text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            {profile.hero.email}
          </a>
          <a
            href={profile.hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            {profile.hero.githubLabel} ↗
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {profile.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              className="rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-black/80"
            >
              <div className="mb-2 text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <div className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {stat.note}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
