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
      className="
        group relative block rounded-2xl p-5 md:p-6
        bg-card border border-border
        shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all duration-300
        hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.18)]
        dark:hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.28)]
        hover:-translate-y-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0
      "
    >
      <div className="space-y-3">
        {/* Thumb */}
        <div className="aspect-video rounded-xl border border-border/60 bg-muted overflow-hidden">
          {thumb ? (
            <Image
              src={thumb}
              alt={title}
              width={800}
              height={450}
              className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
              priority={false}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-muted to-background/40" />
          )}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium text-foreground">{title}</h3>
          <span
            className="
              text-[10px] px-2 py-1 rounded
              bg-muted border border-border text-muted-foreground
              opacity-80 group-hover:opacity-100 transition
            "
          >
            {stack}
          </span>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground">{summary}</p>

        {/* Hint en hover */}
        {href && (
          <span
            className="
              inline-flex items-center gap-1 text-xs text-primary
              opacity-0 group-hover:opacity-100 transition
            "
          >
            Ver caso
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3">
              <path
                fill="currentColor"
                d="M13.5 6l5.5 6-5.5 6-.9-.8 4.1-4.2H5v-1.9h11.7L12.6 6.8l.9-.8z"
              />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
}