"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  // Track: w-16 (64px), h-8 (32px), p-1 (4px)
  // Knob: w-6/h-6 (24px) => recorrido = 64 - 24 - 8 = 32px
  const travel = 32;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Cambiar tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={[
        "relative inline-flex h-8 w-16 items-center rounded-full p-1",
        "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60",
        isDark ? "bg-zinc-900 border border-zinc-700" : "bg-white border border-zinc-300",
      ].join(" ")}
    >
      {/* pista con ligero gradiente */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-transparent" />

      {/* icono de fondo lado izquierdo (sol) */}
      <div className="absolute left-1.5 text-zinc-400">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={isDark ? "opacity-40" : "opacity-80"}
            fill="currentColor"
            d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM12 1h0 0 0 0 0 0 0 0 0 0 0 0h2v3h-2V1zm0 19h2v3h-2v-3zM1 13h3v-2H1v2zm19 0h3v-2h-3v2zM17.24 4.84l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM4.96 19.04l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zm12.67-1.8l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM12 6a6 6 0 100 12A6 6 0 0012 6z"
          />
        </svg>
      </div>

      {/* icono de fondo lado derecho (luna) */}
      <div className="absolute right-1.5 text-zinc-300">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={isDark ? "opacity-80" : "opacity-40"}
            fill="currentColor"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          />
        </svg>
      </div>

      {/* KNOB */}
      <motion.div
        // posición animada
        animate={{ x: isDark ? travel : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 32, mass: 0.6 }}
        className={[
          "relative z-10 h-6 w-6 rounded-full shadow ring-1",
          isDark ? "bg-zinc-800 ring-zinc-700" : "bg-zinc-100 ring-zinc-300",
        ].join(" ")}
      >
        {/* icono dentro del knob (crossfade) */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 grid place-items-center text-zinc-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 grid place-items-center text-amber-500"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM12 1h2v3h-2V1zm0 19h2v3h-2v-3zM1 13h3v-2H1v2zm19 0h3v-2h-3v2zM17.24 4.84l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM4.96 19.04l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zm12.67-1.8l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM12 6a6 6 0 100 12A6 6 0 0012 6z"
                />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}