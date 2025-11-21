// components/project-card.tsx
"use client";

import Image from "next/image";

type Props = {
  title: string;
  stack: string;
  summary: string;
  href?: string;
  thumb?: string;
};

export default function ProjectCard({ title, stack, summary, href, thumb }: Props) {
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800
                 bg-white dark:bg-zinc-900/60 p-5 md:p-6 transition-transform shadow-sm
                 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-0"
    >
      <div className="space-y-3">
        {/* Thumb */}
        <div className="aspect-video rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {thumb ? (
            <Image
              src={thumb}
              alt={title}
              width={800}
              height={450}
              className="h-full w-full object-cover transition group-hover:brightness-105"
              priority={false}
            />
          ) : (
            <div className="h-full w-full bg-zinc-100 dark:bg-zinc-900" />
          )}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-[var(--foreground)]">{title}</h3>
          <span className="text-[10px] px-2 py-1 rounded bg-zinc-100 border border-zinc-200
                           dark:bg-zinc-900 dark:border-zinc-800 opacity-80 group-hover:opacity-100 transition">
            {stack}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{summary}</p>

        {/* Hint en hover */}
        {href && (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-300
                           opacity-0 group-hover:opacity-100 transition">
            Ver caso
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3">
              <path fill="currentColor" d="M13.5 6l5.5 6-5.5 6-.9-.8 4.1-4.2H5v-1.9h11.7L12.6 6.8l.9-.8z" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
}
