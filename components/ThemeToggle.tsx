"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1]"
      aria-label={`Temayı değiştir (Şu an: ${theme === "dark" ? "Karanlık" : "Aydınlık"})`}
      title={`Temayı değiştir (${theme === "dark" ? "Aydınlık moda geç" : "Karanlık moda geç"})`}
    >
      <span className="material-symbols-outlined text-xl flex items-center justify-center">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
