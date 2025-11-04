"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;
  if (!mounted) return null;

  return (
    <button
      aria-label="Cambiar tema"
      className="px-3 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 text-sm"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}