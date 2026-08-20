"use client";

import type { Profile } from "@/lib/types";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
              {profile.footer.copyright}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {profile.footer.note}
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={`mailto:${profile.hero.email}`}
              className="text-sm text-neutral-600 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
            >
              {profile.footer.emailLabel}
            </a>
            <a
              href={profile.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
            >
              {profile.footer.githubLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
