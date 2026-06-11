"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="rounded-full">
      <AnimatedThemeToggler
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onThemeChange={setTheme}
      />
    </div>
  );
}
