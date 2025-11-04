import React from "react";

export const NavLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm md:text-base text-zinc-300 hover:text-white transition">
    {children}
  </a>
);

export const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-semibold text-white">{value}</span>
    <span className="text-xs md:text-sm text-zinc-400">{label}</span>
  </div>
);

export const SectionTitle = ({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) => (
  <div className="max-w-3xl mx-auto text-center space-y-3">
    {kicker && <p className="uppercase tracking-widest text-[10px] md:text-xs text-emerald-400/80">{kicker}</p>}
    <h2 className="text-2xl md:text-4xl font-semibold text-white">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-zinc-400">{subtitle}</p>}
  </div>
);

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(22,163,74,0.25)] transition-all">
    {children}
  </div>
);

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-[10px] md:text-xs tracking-wide border border-emerald-500/20">
    {children}
  </span>
);