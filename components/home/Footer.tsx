"use client";

import { cn } from "@/lib/utils";
import { SeparatorPro } from "../ui/seperatorpro";

interface FooterWithMinimalOutlineProps {
  copyright?: string;
  className?: string;
}

export default function Footer({
  copyright = "© 2026 Niche Radar AI",
  className,
}: FooterWithMinimalOutlineProps) {
  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden pt-10 pb-4 px-8",
        className,
      )}
    >
      <SeparatorPro variant="dots" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm  sm:flex-row md:px-8 text-subheading">
        <div>
          <div className="mt-2 ml-2">{copyright}</div>
          <div className="mt-2 ml-2 text-sm text-muted-foreground">
            All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
